import { useInView } from '../hooks/useInView';

const LOGOS = [
  'Bright Smiles Dental',
  'Pacific Health Group',
  'Summit Medical',
  'Lakeside Family Practice',
  'Metro Dental Care',
  'Valley Health Partners',
  'Coastal Primary Care',
  'Mountain View Clinic',
];

export default function LogoBar() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-16 border-t border-b border-dark-border">
      <div
        ref={ref}
        className={`wrap text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-sm text-text-tertiary mb-10 uppercase tracking-widest font-medium">
          Trusted by 700+ practices across 49 states
        </p>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{name[0]}</span>
                </div>
                <span className="text-sm font-medium text-text-tertiary whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
