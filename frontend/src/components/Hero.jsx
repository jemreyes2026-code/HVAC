import Reveal from './ui/Reveal.jsx';

import heroVideo from '../../assets/videos/exhaust video.mp4';

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
    <section id="hero" className="relative isolate overflow-hidden border-b border-paper-line bg-night">
      <video
        src={heroVideo}
        aria-hidden="true"
        width={960}
        height={540}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-night/40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" aria-hidden="true" />
      <div className="wrap relative z-10 flex min-h-[80svh] items-center justify-center py-16 sm:py-20 lg:py-24">
        <Reveal className="mx-auto w-full max-w-3xl text-center">
          <p className="eyebrow">Kitchen Exhaust Cleaning Specialists</p>

          <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.12]">
            Keep your kitchen safe, compliant, and running
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/90">
            MJAMV General Cleaning Services cleans commercial kitchen exhaust systems across Metro
            Manila — hoods, filters, ductwork, and rooftop blowers degreased so your ventilation
            passes inspection and keeps pulling air.
          </p>

          <ul className="mx-auto mt-7 w-fit space-y-3 text-left">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-tint text-crimson-light">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Schedule a Service
            </a>
            <a href="#services" className="btn-secondary">
              View Services &amp; Pricing
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
