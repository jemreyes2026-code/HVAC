let uid = 0;

/**
 * The MJAMV wordmark — the client's existing brand asset, kept on its original
 * arc construction. `subColor` lets the lower line sit on light or dark grounds.
 */
export default function Logo({ height = 52, subColor = '#1F1E1C', className = '' }) {
  const arcId = `mjamv-arc-${(uid += 1)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 118"
      height={height}
      className={className}
      role="img"
      aria-label="MJAMV General Cleaning Services"
    >
      <defs>
        <path id={arcId} d="M 15,90 A 160,160 0 0,1 265,90" />
      </defs>
      <text
        fontFamily="Impact,'Arial Black',sans-serif"
        fontSize="44"
        fill="#C41230"
        stroke="#C0C0C0"
        strokeWidth="3"
        paintOrder="stroke fill"
        letterSpacing="2"
      >
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          MJAMV
        </textPath>
      </text>
      <text
        x="140"
        y="112"
        textAnchor="middle"
        fontFamily="'Satoshi',sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={subColor}
        letterSpacing="1"
      >
        GENERAL CLEANING SERVICES
      </text>
    </svg>
  );
}
