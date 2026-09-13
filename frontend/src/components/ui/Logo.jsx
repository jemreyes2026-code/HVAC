export default function Logo({ height = 52, subColor = '#0F0F0F', className = '' }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 100"
      height={height}
      className={className}
      role="img"
      aria-label="MJAMV General Cleaning Services"
    >
      <text
        x="180"
        y="65"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="76"
        fontWeight="900"
        fill="#D30C00"
      >
        MJAMV
      </text>
      <text
        x="180"
        y="96"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={subColor}
      >
        GENERAL CLEANING SERVICES
      </text>
    </svg>
  );
}
