import kitchenExhaustIcon from '../../../assets/images/Kitchen Exhaust icon.png';
import minorRepairsIcon from '../../../assets/images/Minor Repairs icon.png';
import ocularInspectionIcon from '../../../assets/images/Occular Inspection icon.png';

const ICONS = {
  'kitchen-exhaust-cleaning': kitchenExhaustIcon,
  'ocular-inspection': ocularInspectionIcon,
  'minor-repairs': minorRepairsIcon,
};

export default function ServiceIcon({ slug, className = '' }) {
  if (!ICONS[slug]) return null;

  if (slug === 'ocular-inspection' || slug === 'minor-repairs') {
    const mask = `url("${ICONS[slug]}") center / contain no-repeat`;

    return (
      <span
        aria-hidden="true"
        className={`inline-block bg-[#7A2929] ${className}`}
        style={{ mask, WebkitMask: mask }}
      />
    );
  }

  return (
    <img src={ICONS[slug]} alt="" className={`object-contain ${className}`} />
  );
}
