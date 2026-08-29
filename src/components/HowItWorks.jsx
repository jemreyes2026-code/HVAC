import { useInView } from '../hooks/useInView';

const STEPS = [
  {
    step: '01',
    title: 'Connect',
    description: 'Link your practice management system — Dentrix, Eaglesoft, Open Dental, or any major PMS. Setup takes one to two weeks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Learn',
    description: 'Lassie observes your existing workflows, understands your payer mix, and adapts to how your practice already operates.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Automate',
    description: 'AI agents begin handling enrollments, payment posting, claim follow-ups, and reconciliation autonomously around the clock.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Focus',
    description: 'Your team focuses on patients while Lassie handles the back office. Exceptions get flagged for review — you stay in control.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="section-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`eyebrow mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            How It Works
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Up and running in weeks, not months
          </h2>
          <p className={`text-lg text-text-secondary leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Lassie is designed to work with the way your practice already runs.
            No ripping and replacing — just better workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.step}
              className={`relative card-dark group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-dark-border" />
              )}

              <span className="text-xs font-bold text-accent/60 uppercase tracking-widest mb-4 block">
                Step {step.step}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
