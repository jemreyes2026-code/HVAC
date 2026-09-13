import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route changes start at the top; a `/#services` style link scrolls to that
 * section instead. Without this, navigating from a service page back to a home
 * anchor leaves you wherever you were scrolled to.
 */
export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the target section mount before measuring its position
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
