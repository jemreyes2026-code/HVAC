import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div ref={ref} className="wrap relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card px-4 py-2 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-text-secondary">Backed by Andreessen Horowitz</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            AI That Runs the{' '}
            <span className="gradient-text">Doctor&#8217;s Office</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Lassie automates the administrative work that keeps your practice
            moving — from enrollments and posting to reconciliation, appeals,
            and follow-ups.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="#contact" className="btn-primary text-base !px-8 !py-3.5">
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base !px-8 !py-3.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Dashboard Preview */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative rounded-2xl border border-dark-border bg-dark-card overflow-hidden shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

              {/* Dashboard Header Bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-dark-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-dark-muted rounded-md px-4 py-1 text-xs text-text-tertiary">
                    app.lassie.ai/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <DashboardCard label="Claims Processed" value="1,247" change="+12%" />
                  <DashboardCard label="Hours Saved" value="342" change="+8%" />
                  <DashboardCard label="Revenue Posted" value="$284K" change="+15%" />
                </div>

                {/* Activity List */}
                <div className="space-y-3">
                  <ActivityRow
                    text="Payment posted — $1,450.00 from Delta Dental"
                    time="2 min ago"
                    status="success"
                  />
                  <ActivityRow
                    text="Claim follow-up sent — Patient #4821"
                    time="5 min ago"
                    status="pending"
                  />
                  <ActivityRow
                    text="EFT reconciliation completed — 23 transactions"
                    time="12 min ago"
                    status="success"
                  />
                  <ActivityRow
                    text="Payer enrollment verified — Cigna"
                    time="18 min ago"
                    status="success"
                  />
                </div>
              </div>
            </div>

            {/* Glow effect behind dashboard */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-accent/10 blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ label, value, change }) {
  return (
    <div className="rounded-xl border border-dark-border bg-dark-muted p-4">
      <p className="text-xs text-text-tertiary mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
        <span className="text-xs font-medium text-accent">{change}</span>
      </div>
    </div>
  );
}

function ActivityRow({ text, time, status }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-dark-border bg-dark-muted px-4 py-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        status === 'success' ? 'bg-accent/20' : 'bg-yellow-500/20'
      }`}>
        {status === 'success' ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6M1 20v-6h6" />
          </svg>
        )}
      </div>
      <span className="text-sm text-text-secondary flex-1 truncate">{text}</span>
      <span className="text-xs text-text-tertiary flex-shrink-0">{time}</span>
    </div>
  );
}
