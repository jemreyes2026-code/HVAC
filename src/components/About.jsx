import Reveal from './ui/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section border-y border-paper-line bg-paper-alt">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          {/* Replace with a photo of the team or a finished job */}
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-paper-line bg-white shadow-card">
            <svg
              width="44"
              height="44"
              viewBox="0 0 52 52"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="text-stone"
              aria-hidden="true"
            >
              <rect x="4" y="9" width="44" height="34" rx="3" />
              <circle cx="20" cy="25" r="6" />
              <path d="M4 40l11-12 8 8 9-11 16 15" />
            </svg>
            <span className="text-[0.875rem] text-ink-faint">Team photo here</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
            Expert service, delivered by people who care
          </h2>

          <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              MJAMV General Cleaning Services is a family owned and operated business serving
              commercial kitchens across Metro Manila — from single restaurants to the chains
              feeding thousands of covers a day.
            </p>
            <p>
              Grease build-up in an exhaust system is the quiet reason kitchens fail inspections and
              the loud reason some of them catch fire. Our crews clean to the standard that matters:
              bare metal you can see, on a schedule your insurer and fire marshal will accept.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Schedule Now
            </a>
            <a href="#projects" className="btn-secondary">
              See Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
