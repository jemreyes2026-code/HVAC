import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';

const FEATURES = [
  {
    title: 'Priced Before We Start',
    desc: 'An ocular inspection sets the scope, so the number you approve is the number you pay. No surprises once the panels come off.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2.5" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Cleaned Around Your Hours',
    desc: 'We work the gap between close and prep, so most systems are back online before your first delivery arrives the next morning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M12 6.5V12l3.5 2.5" />
      </svg>
    ),
  },
  {
    title: 'Cleaned To Bare Metal',
    desc: 'The standard is visible metal with no heavy grease left behind — the same bar your fire inspector and insurer measure against.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.5l8 3.5v6c0 4.5-3.2 7.9-8 9.5-4.8-1.6-8-5-8-9.5v-6z" />
        <path d="M8.6 12.2l2.4 2.4 4.4-4.6" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section border-y border-paper-line bg-paper-alt">
      <div className="wrap">
        <SectionHead
          eyebrow="Why Choose Us"
          title="What you can expect from us"
          lead="Commercial kitchens cannot close for a week. Everything below exists because of that."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 100}>
              <div className="card h-full p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson-tint text-crimson">
                  <span className="h-6 w-6">{feat.icon}</span>
                </span>
                <h3 className="mt-5 text-lg">{feat.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10 text-center">
          <a href="#contact" className="btn-primary">
            Book an Appointment
          </a>
        </Reveal>
      </div>
    </section>
  );
}
