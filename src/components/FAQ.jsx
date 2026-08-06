import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';

const FAQS = [
  {
    q: 'What parts do cleaners wash?',
    a: 'They clean the hood canopy, grease filters, interior ductwork, and the exhaust fan on the roof.',
  },
  {
    q: 'How long does the service take?',
    a: 'Most jobs take 4 to 6 hours depending on system size and grease thickness.',
  },
  {
    q: 'Can my own staff clean the system?',
    a: 'Staff can wipe down visible hood surfaces and wash filters, but deep cleaning of ducts and fans requires certified professionals to satisfy insurance and fire codes.',
  },
  {
    q: 'What does "clean" mean?',
    a: 'Industry standards require exposed metal to be visible down to bare metal with no heavy grease layers remaining.',
  },
];

export default function FAQ() {
  const [headRef, headVisible] = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className={`faq-head reveal${headVisible ? ' is-visible' : ''}`} ref={headRef}>
          <p className="faq-eyebrow">Have Questions?</p>
          <h2 className={`faq-h2 reveal-heading${headVisible ? ' is-visible' : ''}`}>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
              <button className="faq-q" aria-expanded={openIndex === i} onClick={() => toggle(i)}>
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l6 6 6-6" /></svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
