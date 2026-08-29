import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const ACTIVITIES = [
  {
    agent: 'Payment Agent',
    action: 'Posted payment',
    detail: '$2,340.00 from Aetna — 3 line items matched',
    icon: 'dollar',
    color: 'accent',
  },
  {
    agent: 'Claims Agent',
    action: 'Followed up on claim',
    detail: 'Claim #78421 — resubmitted with corrected codes',
    icon: 'send',
    color: 'blue',
  },
  {
    agent: 'Enrollment Agent',
    action: 'Completed enrollment',
    detail: 'MetLife — provider credentials verified',
    icon: 'shield',
    color: 'purple',
  },
  {
    agent: 'Reconciliation Agent',
    action: 'Reconciled EFT deposit',
    detail: '$12,450.00 — 18 payments matched to claims',
    icon: 'check',
    color: 'accent',
  },
  {
    agent: 'Scheduling Agent',
    action: 'Confirmed appointments',
    detail: '14 patients confirmed for tomorrow',
    icon: 'calendar',
    color: 'orange',
  },
  {
    agent: 'Appeals Agent',
    action: 'Filed appeal',
    detail: 'Claim #62190 — supporting documentation attached',
    icon: 'file',
    color: 'pink',
  },
];

const ICON_MAP = {
  dollar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  send: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  file: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  ),
};

const COLOR_MAP = {
  accent: { bg: 'bg-accent/15', text: 'text-accent' },
  blue: { bg: 'bg-blue-500/15', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/15', text: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/15', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/15', text: 'text-pink-400' },
};

export default function ActivityFeed() {
  const [ref, isVisible] = useInView({ threshold: 0.15 });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= ACTIVITIES.length) {
          clearInterval(timer);
          return c;
        }
        return c + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="product" className="section-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/30 to-dark pointer-events-none" />

      <div ref={ref} className="wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`eyebrow mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            See Lassie at Work
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Your AI back office, always on
          </h2>
          <p className={`text-lg text-text-secondary leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Lassie&apos;s autonomous agents work around the clock, completing tasks
            that used to eat up your staff&apos;s entire day.
          </p>
        </div>

        {/* Activity Feed */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Feed Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-white">Live Activity</span>
              </div>
              <span className="text-xs text-text-tertiary">Today</span>
            </div>

            {/* Feed Items */}
            <div className="divide-y divide-dark-border">
              {ACTIVITIES.map((activity, i) => {
                const colors = COLOR_MAP[activity.color];
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-4 px-6 py-4 transition-all duration-500 ${
                      i < visibleCount
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className={`w-9 h-9 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {ICON_MAP[activity.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-semibold text-white">{activity.agent}</span>
                        <span className="text-xs text-text-tertiary">&middot;</span>
                        <span className="text-xs text-text-tertiary">{activity.action}</span>
                      </div>
                      <p className="text-sm text-text-secondary truncate">{activity.detail}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ${
                      i < visibleCount ? 'scale-100' : 'scale-0'
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
