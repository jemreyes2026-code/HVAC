import Reveal from './Reveal.jsx';

/** Standard section heading block: eyebrow, title, optional lead paragraph. */
export default function SectionHead({ eyebrow, title, lead, align = 'center', className = '' }) {
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">{title}</h2>
      {lead && <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">{lead}</p>}
    </Reveal>
  );
}
