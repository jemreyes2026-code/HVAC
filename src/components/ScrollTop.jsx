import { useEffect, useRef, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef(null);

  /* A sentinel near the top of the document stands in for a scroll listener */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="pointer-events-none absolute top-[500px] h-px w-px" aria-hidden="true" />
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-crimson text-white shadow-card transition-all duration-200 hover:bg-crimson-hover ${
          visible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 9.5L7.5 4.5L12.5 9.5" />
        </svg>
      </button>
    </>
  );
}
