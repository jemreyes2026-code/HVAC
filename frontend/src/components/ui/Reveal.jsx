import { useInView } from '../../hooks/useInView.js';

/** A gentle fade-up as blocks enter view. Subtle by design — no blur, no drama. */
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${Math.min(delay, 300)}ms` }}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      data-reveal={variant}
      {...rest}
    >
      {children}
    </Tag>
  );
}
