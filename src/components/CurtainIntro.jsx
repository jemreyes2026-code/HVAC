import { useEffect, useRef, useState } from 'react';

export const CURTAIN_MS_MOTION = 900;

export default function CurtainIntro({ noMotion }) {
  const topRef = useRef(null);
  const botRef = useRef(null);
  const [removed, setRemoved] = useState(noMotion);

  useEffect(() => {
    if (noMotion) {
      setRemoved(true);
      return;
    }
    const top = topRef.current;
    const bot = botRef.current;
    if (!top || !bot) return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const ease = 'cubic-bezier(.76,0,.24,1)';
        top.style.transition = `transform ${CURTAIN_MS_MOTION}ms ${ease}`;
        bot.style.transition = `transform ${CURTAIN_MS_MOTION}ms ${ease}`;
        top.style.transform = 'translateY(-100%)';
        bot.style.transform = 'translateY(100%)';
      });
      top.dataset.raf2 = raf2;
    });

    const timer = setTimeout(() => setRemoved(true), CURTAIN_MS_MOTION + 200);
    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(timer);
    };
  }, [noMotion]);

  if (removed) return null;

  return (
    <>
      <div id="curtain-top" ref={topRef} aria-hidden="true"></div>
      <div id="curtain-bottom" ref={botRef} aria-hidden="true"></div>
    </>
  );
}
