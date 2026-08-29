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
    body: "Setup was seamless — Lassie learned our workflows in under two weeks. The AI agents flag exceptions for review so we always stay in control. It feels like having an expert back office team that never sleeps.",
    name: 'Dr. Emily Thornton',
    role: 'Director, Coastal Pediatrics',
    initials: 'ET',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="company" className="section">
      <div ref={ref} className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Trusted by practices nationwide
          </h2>
          <p className={`text-lg text-warm-secondary leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hear from the medical and dental practices that rely on Lassie every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`rounded-2xl bg-white border border-warm-border p-8 flex flex-col transition-all duration-700 hover:shadow-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <blockquote className="text-[0.9375rem] text-warm-secondary leading-relaxed flex-1">
                &ldquo;{t.body}&rdquo;
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-warm-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-dark text-warm flex items-center justify-center text-sm font-bold font-sans">
                  {t.initials}
                </div>
                <div>
                  <span className="block text-sm font-semibold font-sans text-warm">{t.name}</span>
                  <span className="block text-xs text-warm-secondary font-sans">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
