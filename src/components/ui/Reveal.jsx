import { useInView } from '../../hooks/useInView.js';

/** A gentle fade-up as blocks enter view. Subtle by design — no blur, no drama. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
