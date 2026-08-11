import { useState } from 'react';
import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';

const FAQS = [
  {
    q: 'What parts do you actually clean?',
    a: 'The hood canopy, grease filters, interior ductwork, and the exhaust fan on the roof — the full path grease travels, not just the parts your staff can see.',
  },
  {
    q: 'How long does the service take?',
    a: 'Most jobs take 4 to 6 hours depending on system size and grease thickness. We schedule around your service hours so the kitchen is ready for the next prep.',
  },
  {
    q: 'Can my own staff clean the system?',
    a: 'Staff can wipe down visible hood surfaces and wash filters. Deep cleaning of ducts and fans requires certified professionals — that is what satisfies insurance requirements and fire codes.',
  },
  {
    q: 'What does "clean" actually mean?',
    a: 'Industry standards require exposed metal to be visible down to bare metal, with no heavy grease layers remaining. That is the bar we clean to and the bar you are inspected against.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Have Questions?" title="Frequently asked questions" />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;

            return (
              <Reveal key={item.q} delay={i * 80}>
                <div className="card overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-ink">{item.q}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 text-ink-faint transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M3 6l6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
