import Reveal from './ui/Reveal.jsx';

const POINTS = [
  'Free quotes after an on-site inspection',
  'Scheduled around your service hours',
  'Cleaned to bare metal, ready for inspection',
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="border-b border-paper-line bg-paper-alt">
      <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <Reveal>
          <p className="eyebrow">Kitchen Exhaust Cleaning Specialists</p>

          <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.12]">
            Keep your kitchen safe, compliant, and running
          </h1>

          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
            MJAMV General Cleaning Services cleans commercial kitchen exhaust systems across Metro
            Manila — hoods, filters, ductwork, and rooftop blowers degreased so your ventilation
            passes inspection and keeps pulling air.
          </p>

          <ul className="mt-7 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-tint text-crimson">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Schedule a Service
            </a>
            <a href="#services" className="btn-secondary">
              View Services &amp; Pricing
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* Replace with a photo of a crew cleaning a hood or duct */}
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-paper-line bg-white shadow-card">
            <svg
              width="44"
              height="44"
              viewBox="0 0 52 52"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="text-stone"
              aria-hidden="true"
            >
              <rect x="4" y="9" width="44" height="34" rx="3" />
              <circle cx="20" cy="25" r="6" />
              <path d="M4 40l11-12 8 8 9-11 16 15" />
            </svg>
            <span className="text-[0.875rem] text-ink-faint">Hero photo here</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
