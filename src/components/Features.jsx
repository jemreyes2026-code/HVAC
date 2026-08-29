import { useInView } from '../hooks/useInView';

const FEATURES = [
  {
    title: 'Payment Posting',
    description: 'Automatically post insurance payments and patient payments into your practice management system with line-level accuracy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Claim Follow-ups',
    description: 'Track outstanding claims and automatically follow up with payers, resubmitting with corrected information when needed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    title: 'EFT Reconciliation',
    description: 'Match electronic fund transfers to claims and EOBs, ensuring every deposit is accounted for and discrepancies are flagged.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Payer Enrollments',
    description: 'Handle new payer enrollments and credentialing paperwork so your practice can accept more insurance plans, faster.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Appointment Confirmations',
    description: 'Confirm, reschedule, and manage patient appointments automatically — reducing no-shows and keeping your schedule full.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Reporting & Analytics',
    description: "Get real-time visibility into your practice's financial health with automated reports on collections, aging, and productivity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-6.219-8.56" /><polyline points="21 3 21 12 12 12" />
      </svg>
    ),
  },
];

export default function Features() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="product" className="section">
      <div ref={ref} className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Everything your back office needs
          </h2>
          <p className={`text-lg text-warm-secondary leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Lassie handles the repetitive admin work that consumes your team&apos;s
            time, so they can focus on what matters most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`group rounded-2xl bg-cream-light border border-warm-border p-7 cursor-default transition-all duration-700 hover:bg-white hover:shadow-card hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-cream-dark text-warm flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-warm group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif mb-2">{feature.title}</h3>
              <p className="text-sm text-warm-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
