import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';

/**
 * PLACEHOLDER CONTENT — structural samples showing what a real quote looks like
 * in this layout. These are NOT real customer reviews. Replace each entry with
 * an actual, attributable client quote (with permission) before launch, and
 * delete the "Sample content" badge in the markup below once you do.
 */
const TESTIMONIALS = [
  {
    body: 'A short quote about the work — what shape the system was in, how the crew handled scheduling, and what changed afterward. Replace with a real client quote.',
    name: 'Client name',
    role: 'Role, restaurant group',
  },
  {
    body: 'A second quote, ideally about reliability or turnaround — something a prospective client would find reassuring. Replace with a real client quote.',
    name: 'Client name',
    role: 'Role, restaurant group',
  },
  {
    body: 'A third quote tying the work to a measurable outcome — a passed inspection, an insurer requirement met, airflow restored. Replace with a real client quote.',
    name: 'Client name',
    role: 'Role, restaurant group',
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5 text-crimson" aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Testimonials" title="What our customers are saying" />

        <Reveal className="mt-4 flex justify-center">
          {/* Delete this badge once real quotes replace the samples above */}
          <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wide text-amber-700">
            Sample content — replace before launch
          </span>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.body} delay={i * 100}>
              <figure className="card h-full p-7">
                <Stars />
                <blockquote className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {t.body}
                </blockquote>
                <figcaption className="mt-6 border-t border-paper-line pt-4">
                  <span className="block font-medium text-ink">{t.name}</span>
                  <span className="block text-[0.875rem] text-ink-faint">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
