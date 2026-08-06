import { useEffect, useRef, useState } from 'react';

/** Animates a peso price up from 0 to `target` once the element scrolls into view. */
export function useCountUp(target, ms = 1100) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / ms, 1);
            setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, ms]);

  return [ref, value];
}
