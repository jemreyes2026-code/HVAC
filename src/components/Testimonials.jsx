import { useInView } from '../hooks/useInView';

const TESTIMONIALS = [
  {
    body: "Lassie completely transformed our front office workflow. We used to spend over 100 hours a month on paperwork alone. Now our team focuses on patients while Lassie handles the rest.",
    name: 'Dr. Sarah Chen',
    role: 'Owner, Bright Dental Group',
    initials: 'SC',
  },
  {
    body: "The payment posting alone saved us two full-time employees worth of work. Claims get processed in minutes instead of days, and our collections have never been better.",
    name: 'Dr. Marcus Rivera',
    role: 'Managing Partner, Summit Family Medicine',
    initials: 'MR',
  },
  {
    body: "Setup was seamless — Lassie learned our Eaglesoft workflows in under two weeks. The AI agents flag exceptions for review so we always stay in control. It feels like having an expert back office team that never sleeps.",
    name: 'Dr. Emily Thornton',
    role: 'Director, Coastal Pediatrics',
    initials: 'ET',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="company" className="section-light relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`eyebrow !text-accent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Testimonials
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-dark mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Trusted by practices nationwide
          </h2>
          <p className={`text-lg text-text-dark-secondary leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hear from the medical and dental practices that rely on Lassie every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`card-light !p-8 flex flex-col transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#22C55E" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[0.9375rem] text-text-dark-secondary leading-relaxed flex-1">
                &ldquo;{t.body}&rdquo;
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-border-light flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-text-dark">{t.name}</span>
                  <span className="block text-xs text-text-dark-secondary">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
