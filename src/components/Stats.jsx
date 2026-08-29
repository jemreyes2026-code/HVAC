import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { value: 700, suffix: '+', label: 'Practices', description: 'Medical and dental practices trust Lassie' },
  { value: 49, suffix: '', label: 'States', description: 'Coverage across the United States' },
  { value: 250, suffix: 'K+', label: 'Hours Saved', description: 'Annual hours of labor automated' },
  { value: 6, suffix: ' min', label: 'Avg Claim Time', description: 'From submission to resolution' },
];

function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, shouldStart]);

  return count;
}

function StatCard({ stat, isVisible, delay }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-2">
        {count}
        <span className="gradient-text">{stat.suffix}</span>
      </div>
      <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
      <p className="text-sm text-text-secondary">{stat.description}</p>
    </div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card via-dark to-dark-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div ref={ref} className="wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`eyebrow mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            By the Numbers
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            The numbers speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={200 + i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
