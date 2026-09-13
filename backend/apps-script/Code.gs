/**
 * MJAMV General Cleaning Services — form-to-Sheet endpoint.
 *
 * Setup:
 *   1. Open (or create) the Google Sheet you want submissions saved to.
 *   2. Extensions > Apps Script.
 *   3. Delete any starter code in Code.gs and paste this file's contents in.
 *   4. Deploy > New deployment > type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   5. Copy the deployment's Web app URL and put it in frontend/.env as
 *      VITE_GOOGLE_SCRIPT_URL (see frontend/.env.example).
 *   6. Whenever you change this script, you must create a NEW version
 *      (Manage deployments > edit > New version > Deploy) for changes to go
 *      live. Saving the file alone does not update the endpoint.
 */

const SPREADSHEET_ID = '1nIyxtvcBacfJ-5tcyncfx4ChDAV8YLgEF71stXqQBmU';
const SHEET_ID = 1811707627;
const HEADERS = [
  'Timestamp',
  'Form',
  'Name',
  'Phone',
  'Email',
  'Service',
  'Preferred Date',
  'Preferred Time',
  'Message',
];

/**
 * Open the deployment URL in a browser to confirm it is live. If you see the
 * JSON below, the Web App is deployed and reachable.
 */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: 'MJAMV form endpoint is live. POST to submit.' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  // Two forms submitting at the same instant can otherwise compute the same
  // "next row" and one overwrites the other. The lock serialises appends.
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    const data = JSON.parse(e.postData.contents);
    if (!data.name || !data.phone || !data.service) {
      throw new Error('Name, phone and service are required.');
    }
    const sheet = getSubmissionSheet();

    sheet.appendRow([
      new Date(),
      safeCell(data.form),
      safeCell(data.name),
      safeCell(data.phone),
      safeCell(data.email),
      safeCell(data.service),
      safeCell(data.date),
      safeCell(data.time),
      safeCell(data.message),
    ]);

    SpreadsheetApp.flush();
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    // Surfaces in Apps Script > Executions if a submission ever goes missing
    console.error('Failed to append submission: ' + err);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function safeCell(value) {
  const text = String(value || '');
  return /^[=+@-]/.test(text) ? "'" + text : text;
}

function getSubmissionSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetById(SHEET_ID);
  if (!sheet) throw new Error('The configured submissions tab was not found.');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}
