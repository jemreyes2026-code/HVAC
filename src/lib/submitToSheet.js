const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

/**
 * Posts form data to the Google Apps Script Web App (see apps-script/Code.gs),
 * which appends a row to a Google Sheet. Apps Script doesn't return CORS
 * headers for POST, so the request is fired with mode:'no-cors' — the
 * response is opaque, meaning we can't read success/failure from it directly.
 * A failed fetch (network/DNS error) still rejects and is caught by callers.
 */
export async function submitToSheet(data) {
  if (!SCRIPT_URL) {
    throw new Error(
      'Missing VITE_GOOGLE_SCRIPT_URL. Set it in your .env file — see .env.example and README.md.'
    );
  }

  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
  });
}
