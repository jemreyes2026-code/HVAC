import { useInView } from '../hooks/useInView.js';

const AREAS = ['Antipolo', 'Makati', 'Pasay', 'Quezon City', 'Marikina', 'Pasig'];

function PinIcon() {
  return (
    <svg className="area-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function ServiceAreas() {
  const [eyebrowRef, eyebrowVisible] = useInView();
  const [h2Ref, h2Visible] = useInView();
  const [subRef, subVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="areas-section" id="areas">
      <div className="areas-bg" aria-hidden="true"></div>
      <div className="wrap">
        <div className={`areas-eyebrow reveal${eyebrowVisible ? ' is-visible' : ''}`} ref={eyebrowRef}>Where We Work</div>
        <div ref={h2Ref}>
          <h2 className={`areas-h2 reveal-heading reveal-d1${h2Visible ? ' is-visible' : ''}`}>Our Service Areas</h2>
        </div>
        <p className={`areas-sub reveal reveal-d2${subVisible ? ' is-visible' : ''}`} ref={subRef}>
          We proudly serve commercial kitchens and food establishments across Metro Manila and surrounding areas.
        </p>

        <div className={`areas-grid stagger${gridVisible ? ' is-visible' : ''}`} ref={gridRef}>
          {AREAS.map((area) => (
            <div className="area-item" key={area}>
              <PinIcon />
              <div className="area-name">{area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
