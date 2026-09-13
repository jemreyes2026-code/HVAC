import { HONEYPOT_FIELD } from '../../lib/honeypot.js';

/**
 * Positioned off-screen rather than `display:none` or `type="hidden"` — bots
 * routinely skip those, but tend to fill anything that looks like a live text
 * input. aria-hidden and tabIndex={-1} keep it away from screen readers and
 * keyboard users, so it costs nothing in accessibility.
 */
export default function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_FIELD}>Company website</label>
      <input
        type="text"
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
