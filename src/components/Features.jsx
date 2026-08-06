import { useInView } from '../hooks/useInView.js';

const FEATURES = [
  {
    title: 'Competitive Pricing',
    desc: 'Unbeatable comfort meets unbeatable prices — top-notch HVAC services affordable for everyone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Customer Focused',
    desc: 'Your satisfaction is our compass; our HVAC services revolve around your needs and preferences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Quality Work',
    desc: 'Elevate your comfort with our commitment to precision, excellence, and lasting HVAC solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Features() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="features-section" id="features">
      <div className="wrap">
        <div className={`feat-header reveal${headerVisible ? ' is-visible' : ''}`} ref={headerRef}>
          <h2 className={`feat-h2 reveal-heading${headerVisible ? ' is-visible' : ''}`}>What You Can Expect From Us</h2>
          <p className="feat-sub">Our team of skilled HVAC technicians are fully certified, customer focused, and will always have your best interests in mind.</p>
          <hr className="feat-rule" />
        </div>

        <div className={`feat-grid stagger${gridVisible ? ' is-visible' : ''}`} ref={gridRef}>
          {FEATURES.map((feat) => (
            <div className="feat-item" key={feat.title}>
              <div className="feat-icon-wrap">{feat.icon}</div>
              <div className="feat-text">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="btn btn-red">Book an Appointment</a>
        </div>
      </div>
    </section>
  );
}
