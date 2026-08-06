import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView.js';

const TESTIMONIALS = [
  {
    head: 'My first recommendation for anyone looking to have work done on their heating and cooling systems.',
    body: '"We hired [Your Company] to plan and install our heat pump and air conditioning system. We have a very large home and required a unique solution. After several quotes from other companies, we chose them. They offered a genuinely reasonable quote and completed the work in a truly professional and timely manner. Their work exceeded expectations and they have been true to their word on backing their work."',
    name: 'Francis N.',
  },
  {
    head: 'Professional, timely, and completely respectful of our home throughout the entire project.',
    body: '"From the initial consultation to the final walkthrough, every member of their team was professional and courteous. They explained everything clearly, cleaned up thoroughly, and the system has been running flawlessly since day one. Cannot recommend them highly enough to anyone in need of HVAC work."',
    name: 'Sarah M.',
  },
  {
    head: 'Best decision we made — the energy savings alone have already paid back our investment.',
    body: '"We had them retrofit our older home with a modern heat pump system. The team was knowledgeable, efficient, and went above and beyond to make sure everything was working perfectly before they left. Our energy bills dropped significantly and the house is more comfortable than it has ever been in 20 years."',
    name: 'David T.',
  },
];

export default function Testimonials() {
  const [headingRef, headingVisible] = useInView();
  const [rowRef, rowVisible] = useInView();
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);

  const goTo = (idx) => setCur(((idx % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur((c) => (c + 1) % TESTIMONIALS.length), 6500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const withReset = (fn) => () => { fn(); resetTimer(); };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="wrap">
        <div ref={headingRef}>
          <h2 className={`testi-h2 reveal-heading${headingVisible ? ' is-visible' : ''}`}>
            What Our Customers Are Saying
          </h2>
        </div>

        <div className={`testi-row reveal reveal-d1${rowVisible ? ' is-visible' : ''}`} ref={rowRef}>
          <button className="carousel-btn" aria-label="Previous testimonial" onClick={withReset(() => goTo(cur - 1))}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
          </button>

          <div className="testi-track" aria-live="polite">
            {TESTIMONIALS.map((t, i) => (
              <div className={`testi-slide${i === cur ? ' active' : ''}`} key={t.name}>
                <div className="testi-card">
                  <span className="quote-glyph" aria-hidden="true">&ldquo;</span>
                  <div className="testi-head">{t.head}</div>
                  <p className="testi-body">{t.body}</p>
                  <div className="testi-name">{t.name}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn" aria-label="Next testimonial" onClick={withReset(() => goTo(cur + 1))}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
          </button>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              className={`testi-dot${i === cur ? ' active' : ''}`}
              role="tab"
              aria-selected={i === cur}
              aria-label={`Testimonial ${i + 1}`}
              onClick={withReset(() => goTo(i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
