import Reveal from './ui/Reveal.jsx';
import teamPhoto from '../../assets/images/MJAMV hero picture-enhanced.png';

export default function About() {
  return (
    <section id="about" className="section border-y border-paper-line bg-paper-alt">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal variant="scale">
          <img
            src={teamPhoto}
            alt="MJAMV technician working on a commercial kitchen exhaust hood"
            width={1254}
            height={1254}
            loading="lazy"
            decoding="async"
            className="block aspect-[4/3] w-full rounded-xl border border-paper-line bg-surface object-cover shadow-card"
          />
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
