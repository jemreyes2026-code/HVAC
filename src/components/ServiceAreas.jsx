import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';

const AREAS = ['Antipolo', 'Makati', 'Pasay', 'Quezon City', 'Marikina', 'Pasig'];

export default function ServiceAreas() {
  return (
    <section id="areas" className="section border-y border-paper-line bg-paper-alt">
      <div className="wrap">
        <SectionHead
          eyebrow="Where We Work"
          title="Our service areas"
          lead="We serve commercial kitchens and food establishments across Metro Manila and the surrounding areas. Not on the list? Ask anyway — we travel for scheduled contracts."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {AREAS.map((area, i) => (
            <Reveal key={area} delay={i * 70}>
              <div className="card flex flex-col items-center gap-3 p-5 text-center hover:shadow-card-hover">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-crimson"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span className="font-medium text-ink">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
