import { useCountUp } from '../hooks/useCountUp.js';
import { useInView } from '../hooks/useInView.js';

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 6.5h9M7 2l4.5 4.5L7 11" />
    </svg>
  );
}

function ServicePrice({ target }) {
  const [ref, value] = useCountUp(target, 1100);
  return (
    <div className="svc-price" ref={ref}>₱{value.toLocaleString()}</div>
  );
}

export default function Services() {
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="services-section" id="services">
      <div className={`services-grid stagger${gridVisible ? ' is-visible' : ''}`} ref={gridRef}>

        {/* Card 1 · Ocular Inspection */}
        <div className="svc-card">
          <svg className="svc-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="26" cy="26" r="18" />
            <line x1="38.8" y1="38.8" x2="57" y2="57" />
          </svg>
          <div className="svc-name">Ocular Inspection</div>
          <div className="svc-price-label">Starting At</div>
          <ServicePrice target={1000} />
          <p className="svc-desc">On-site ocular inspection of your kitchen exhaust system to assess the scope of work before a final quote.</p>
          <a href="#contact" className="svc-more">Learn More <ArrowIcon /></a>
        </div>

        {/* Card 2 · Kitchen Exhaust Cleaning */}
        <div className="svc-card">
          <svg className="svc-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <defs><clipPath id="kec-clip"><circle cx="32" cy="33" r="25" /></clipPath></defs>
            <circle cx="32" cy="33" r="25" />
            <g clipPath="url(#kec-clip)">
              <rect x="27" y="7" width="10" height="7" />
              <path d="M 19,23 L 25,14 L 39,14 L 45,23 Z" />
              <rect x="6" y="40" width="52" height="20" />
              <line x1="32" y1="40" x2="32" y2="60" />
              <line x1="20" y1="47" x2="20" y2="51" />
              <line x1="44" y1="47" x2="44" y2="51" />
              <rect x="9" y="32" width="16" height="8" rx="1" />
              <polyline points="18,32 18,26 23,26" />
              <circle cx="37" cy="35" r="2.5" />
              <circle cx="46" cy="35" r="2.5" />
              <circle cx="41.5" cy="29" r="2.5" />
            </g>
          </svg>
          <div className="svc-name">Kitchen Exhaust<br />Cleaning</div>
          <div className="svc-price-label">Starting At</div>
          <ServicePrice target={6500} />
          <p className="svc-desc">Complete kitchen exhaust system cleaning — hoods, filters, ductwork, and rooftop blowers — degreased top to bottom to reduce fire risk and keep your ventilation running efficiently.</p>
          <a href="#contact" className="svc-more">Learn More <ArrowIcon /></a>
        </div>

        {/* Card 3 · Minor Repairs */}
        <div className="svc-card">
          <svg className="svc-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M 8,29 L 32,9 L 56,29" />
            <path d="M 13,25 L 13,57 L 51,57 L 51,25" />
            <path d="M 24,32 L 46,50" />
            <path d="M 20,26 Q 18,24 20,22 Q 22,20 24,22 Q 26,24 24,26 Q 22,28 20,26 Z" />
            <circle cx="48" cy="52" r="3" />
            <path d="M 42,32 L 20,50" />
            <path d="M 44,26 L 40,30" />
            <rect x="17" y="48" width="8" height="5" rx="1.2" transform="rotate(-40 21 50.5)" />
          </svg>
          <div className="svc-name">Minor Repairs</div>
          <a href="#contact" className="svc-book">Book an appointment<br />to discuss pricing</a>
          <p className="svc-desc">Minor exhaust system repairs, including motor belt timing adjustments, belt replacement, and motor replacement.</p>
          <a href="#contact" className="svc-more">Learn More <ArrowIcon /></a>
        </div>

      </div>
    </section>
  );
}
