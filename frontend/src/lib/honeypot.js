/**
 * Spam trap. The form carries a decoy field that is invisible and unreachable
 * by keyboard, so a real visitor can never fill it in. Bots that blindly
 * populate every input give themselves away by putting something in it.
 *
 * Named to look attractive to a scraper rather than like a trap.
 */
export const HONEYPOT_FIELD = 'company-website';

export function looksAutomated(data) {
  return Boolean(data[HONEYPOT_FIELD]);
}
