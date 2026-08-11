const ICONS = {
  'ocular-inspection': (
    <>
      <circle cx="26" cy="26" r="18" />
      <line x1="38.8" y1="38.8" x2="57" y2="57" />
    </>
  ),
  'kitchen-exhaust-cleaning': (
    <>
      <defs>
        <clipPath id="kec-clip">
          <circle cx="32" cy="33" r="25" />
        </clipPath>
      </defs>
      <circle cx="32" cy="33" r="25" />
      <g clipPath="url(#kec-clip)">
        <rect x="27" y="7" width="10" height="7" />
        <path d="M 19,23 L 25,14 L 39,14 L 45,23 Z" />
        <rect x="6" y="40" width="52" height="20" />
        <line x1="32" y1="40" x2="32" y2="60" />
        <rect x="9" y="32" width="16" height="8" rx="1" />
        <circle cx="37" cy="35" r="2.5" />
        <circle cx="46" cy="35" r="2.5" />
        <circle cx="41.5" cy="29" r="2.5" />
      </g>
    </>
  ),
  'minor-repairs': (
    <>
      <path d="M 8,29 L 32,9 L 56,29" />
      <path d="M 13,25 L 13,57 L 51,57 L 51,25" />
      <path d="M 24,32 L 46,50" />
      <circle cx="48" cy="52" r="3" />
      <path d="M 42,32 L 20,50" />
    </>
  ),
};

export default function ServiceIcon({ slug, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[slug]}
    </svg>
  );
}
