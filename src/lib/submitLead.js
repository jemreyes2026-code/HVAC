import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js';
import { SERVICES } from '../data/services.js';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

/**
 * The <select> submits its option value ("exhaust"), which is meaningless to
 * whoever reads the spreadsheet or the Firebase console. Translate it back to
 * the human name ("Kitchen Exhaust Cleaning") before it leaves the browser.
 */
const SERVICE_LABELS = Object.fromEntries(SERVICES.map((s) => [s.formValue, s.name]));

function readableService(value) {
  return SERVICE_LABELS[value] || value || '';
}

/**
 * Writes a lead to Firestore's `leads` collection — the collection
 * firestore.rules validates and the system of record for the site.
 * Field set must match isValidLead() in firestore.rules exactly.
 */
async function submitToFirestore({ name, phone, email, service, date, time, message, source }) {
  const lead = { name, phone, service: readableService(service), source, createdAt: serverTimestamp() };
  if (email) lead.email = email;
  if (date) lead.date = date;
  if (time) lead.time = time;
  if (message) lead.message = message;
  await addDoc(collection(db, 'leads'), lead);
}

/**
 * Optional mirror to a Google Sheet via Apps Script (see apps-script/Code.gs).
 * Apps Script doesn't return CORS headers for POST, so mode:'no-cors' makes
 * the response opaque — a rejected fetch (network/DNS error) is the only
 * failure signal available. Silently skipped if VITE_GOOGLE_SCRIPT_URL isn't set.
 */
async function submitToSheet(form, data) {
  if (!SCRIPT_URL) return;
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    // text/plain keeps this a "simple request" so the browser skips the CORS
    // preflight, which Apps Script web apps do not answer.
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      ...data,
      service: readableService(data.service),
      form,
      submittedAt: new Date().toISOString(),
    }),
  });
}

/**
 * Submits a lead to both backends in parallel. Firestore is the backend the
 * site depends on, so its failure is thrown to the caller; the Sheet mirror
 * is best-effort and only logged on failure.
 */
export async function submitLead(form, data) {
  const [firestoreResult, sheetResult] = await Promise.allSettled([
    submitToFirestore(data),
    submitToSheet(form, data),
  ]);

  if (sheetResult.status === 'rejected') {
    console.warn('Google Sheet mirror failed:', sheetResult.reason);
  }
  if (firestoreResult.status === 'rejected') {
    throw firestoreResult.reason;
  }
}
