import { useEffect, useState } from 'react';

export function useNoMotion() {
  const [noMotion, setNoMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion:reduce)');
    const onChange = () => setNoMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return noMotion;
}
