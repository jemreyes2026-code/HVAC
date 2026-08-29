import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — warm atmospheric gradient mimicking the keyboard photo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 55% 40%, rgba(195,175,155,0.6) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 60%, rgba(180,165,145,0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(160,145,125,0.4) 0%, transparent 50%),
            linear-gradient(180deg, #B8A898 0%, #C5B5A5 30%, #D0C0B0 60%, #C8B8A5 100%)
          `,
        }} />
        <div className="absolute inset-0 bg-warm/10" />
      </div>

      <div ref={ref} className="wrap relative z-10 text-center py-32 lg:py-40">
        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-serif text-white leading-[1.05] tracking-tight mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          You&rsquo;re a doctor.
          <br />
          <em>Not a machine.</em>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg text-white/80 font-sans mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Let Lassie do your admin
        </p>

        {/* Floating activity card */}
        <div
          className={`inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-sm text-white/90 font-sans">Rescheduled 3 appointments</span>
        </div>

        {/* Email capture */}
        <div
          className={`max-w-md mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-1.5 border border-white/10">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-white placeholder-white/50 text-sm font-sans px-5 py-3 outline-none"
            />
            <button className="bg-white text-warm font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors flex-shrink-0">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
