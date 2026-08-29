import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section id="pricing" className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.1),transparent_60%)]" />

      <div ref={ref} className="wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-text-secondary">Pay only when Lassie works</span>
            </div>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Ready to automate your{' '}
            <span className="gradient-text">back office?</span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Get started with Lassie today and free your team to focus on what
            matters most — your patients.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="#contact" className="btn-primary text-base !px-8 !py-3.5">
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary text-base !px-8 !py-3.5">
              Talk to Sales
            </a>
          </div>

          {/* Trust note */}
          <p
            className={`mt-8 text-sm text-text-tertiary transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            HIPAA compliant &middot; SOC 2 Type II &middot; No long-term contracts
          </p>
        </div>
      </div>
    </section>
  );
}
