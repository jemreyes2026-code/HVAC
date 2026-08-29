import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section id="pricing" className="section">
      <div ref={ref} className="wrap">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Ready to automate your back office?
          </h2>

          <p
            className={`text-lg sm:text-xl text-warm-secondary max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Get started with Lassie today and free your team to focus on what
            matters most — your patients.
          </p>

          <div
            className={`max-w-md mx-auto mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center bg-white rounded-full p-1.5 border border-warm-border shadow-card">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-warm placeholder-warm-tertiary text-sm font-sans px-5 py-3 outline-none"
              />
              <button className="bg-warm text-white font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-warm/85 transition-colors flex-shrink-0">
                Get started
              </button>
            </div>
          </div>

          <p
            className={`text-sm text-warm-tertiary transition-all duration-700 delay-300 ${
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
