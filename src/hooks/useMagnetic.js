import { useEffect } from 'react';

/** Attaches the original "magnetic button" mousemove-follow effect to a ref. */
export function useMagnetic(ref, disabled = false) {
  useEffect(() => {
    const btn = ref.current;
    if (!btn || disabled) return;

    const onEnter = () => {
      btn.style.transition = 'transform .08s linear, background .18s, box-shadow .18s';
    };
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.14;
      const y = (e.clientY - r.top - r.height / 2) * 0.14;
      btn.style.transform = `translate(${x}px,${y}px)`;
    };
    const onLeave = () => {
      btn.style.transition = 'transform .4s cubic-bezier(.22,1,.36,1), background .18s, box-shadow .18s';
      btn.style.transform = '';
    };

    btn.addEventListener('mouseenter', onEnter);
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    return () => {
      btn.removeEventListener('mouseenter', onEnter);
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, disabled]);
}
