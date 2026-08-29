import { useState, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useInView';

const SLIDES = [
  {
    title: 'Lassie does\nyour paperwork',
    description: 'Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.',
    card: {
      type: 'working',
      title: 'Lassie working...',
      line1: 'Retrieving ERA from Delta Dental',
      status: 'Retrieving ERAs...',
    },
    gradient: `
      linear-gradient(135deg, #C4A95A 0%, #D4B96A 20%, #8B7355 40%, #5B6B8A 60%, #C4A95A 80%, #A08B60 100%),
      linear-gradient(90deg, #D4C490 0%, #B8A060 25%, #7A6545 50%, #6B7B9A 75%, #C4B480 100%)
    `,
  },
  {
    title: 'Keeps you\nin the loop',
    description: 'Watch Lassie complete your paperwork, asking for your input when needed on the most complex issues.',
    card: {
      type: 'notification',
      title: 'United Healthcare sent a bulk payment',
      subtitle: '34 claims $14,280',
      status: 'Starting automated posting',
    },
    gradient: `
      linear-gradient(160deg, #5A8A55 0%, #7BAA60 20%, #9BBB70 40%, #C5D5A0 60%, #8AA870 80%, #6B9B5A 100%),
      linear-gradient(90deg, #6B9B5A 0%, #85B565 30%, #E8E0D0 50%, #9BB880 70%, #5A8A55 100%)
    `,
  },
  {
    title: 'And answers\nyour questions',
    description: 'Got a question about a claim? Want to see how your week is tracking? Lassie is always ready to help.',
    card: {
      type: 'chat',
      placeholder: "What's the latest with the United Healthcare payments?",
    },
    gradient: `
      linear-gradient(140deg, #5A8A55 0%, #7BAA60 20%, #C5A0A0 40%, #D5B5B0 55%, #8AAA70 70%, #6B9B5A 100%),
      linear-gradient(90deg, #6B9B5A 0%, #85B565 25%, #D0A0A0 50%, #C5B5A0 75%, #5A8A55 100%)
    `,
  },
];

function LassieIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1F1E1C">
      <circle cx="9" cy="7" r="2.5" />
      <circle cx="15" cy="7" r="2.5" />
      <circle cx="9" cy="15.5" r="2.5" />
      <circle cx="15" cy="15.5" r="2.5" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B9590" strokeWidth="2" className="animate-spin" style={{ animationDuration: '2s' }}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function WorkingCard({ card }) {
  return (
    <div className="bg-white rounded-2xl shadow-float p-5 max-w-sm w-full">
      <div className="flex items-center gap-2.5 mb-4">
        <LassieIcon size={18} />
        <span className="text-sm font-semibold text-warm">{card.title}</span>
      </div>
      <div className="flex items-center gap-3">
        <SpinnerIcon />
        <div className="flex items-center justify-between flex-1">
          <span className="text-xs text-warm-secondary">{card.line1}</span>
          <span className="text-xs text-warm-tertiary">{card.status}</span>
        </div>
      </div>
    </div>
  );
}

function NotificationCard({ card }) {
  return (
    <div className="bg-white rounded-2xl shadow-float p-5 max-w-sm w-full">
      <div className="flex items-center gap-2.5 mb-1">
        <LassieIcon size={18} />
        <div>
          <p className="text-sm font-semibold text-warm">{card.title}</p>
          <p className="text-xs text-warm-secondary">{card.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <SpinnerIcon />
        <span className="text-xs text-warm-secondary">{card.status}</span>
      </div>
    </div>
  );
}

function ChatCard({ card }) {
  return (
    <div className="bg-white rounded-full shadow-float flex items-center gap-3 px-5 py-3 max-w-lg w-full">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9B9590" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <span className="text-sm text-warm-secondary flex-1">{card.placeholder}</span>
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B9590" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
          <path d="M19 10v2a7 7 0 01-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
        </svg>
        <div className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9B9590" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlideCard({ card }) {
  if (card.type === 'working') return <WorkingCard card={card} />;
  if (card.type === 'notification') return <NotificationCard card={card} />;
  return <ChatCard card={card} />;
}

export default function Showcase() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (index === active || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTransitioning(false);
    }, 400);
  }, [active, transitioning]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % SLIDES.length);
        setTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = SLIDES[active];

  return (
    <section id="demo" className="section" ref={ref}>
      {/* Section header */}
      <div className="wrap mb-16 text-center">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          AI that runs the
          <br />
          doctor&rsquo;s office
        </h2>
      </div>

      {/* Carousel */}
      <div className="wrap">
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-12 items-center min-h-[420px] lg:min-h-[520px]">
            {/* Text content */}
            <div
              className={`transition-all duration-400 ${
                transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDuration: '400ms' }}
            >
              <h3 className="text-3xl sm:text-4xl font-serif tracking-tight mb-4 whitespace-pre-line">
                {slide.title}
              </h3>
              <p className="text-base text-warm-secondary leading-relaxed max-w-sm">
                {slide.description}
              </p>
            </div>

            {/* Image card */}
            <div
              className={`relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] transition-all duration-400 ${
                transitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
              style={{
                backgroundImage: slide.gradient,
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease infinite',
                transitionDuration: '400ms',
              }}
            >
              {/* Blur streaks overlay for motion-blur art effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    repeating-linear-gradient(
                      ${active === 0 ? '90deg' : active === 1 ? '170deg' : '150deg'},
                      transparent,
                      rgba(255,255,255,0.08) 2px,
                      transparent 4px
                    )
                  `,
                  filter: 'blur(1px)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 40% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                }}
              />

              {/* Floating UI card */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                <SlideCard card={slide.card} />
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-2.5 bg-warm'
                    : 'w-2.5 h-2.5 bg-warm/20 hover:bg-warm/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
