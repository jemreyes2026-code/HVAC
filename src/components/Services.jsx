import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services.js';
import { useCountUp } from '../hooks/useCountUp.js';
import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';
import ServiceIcon from './ui/ServiceIcon.jsx';

function Price({ target }) {
  const [ref, value] = useCountUp(target, 1100);
  return (
    <span ref={ref} className="text-3xl font-bold text-ink">
      ₱{value.toLocaleString()}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Services"
          title="What we do"
          lead="Three services covering the full life of a commercial kitchen exhaust system."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100}>
              <div
                className={`card flex h-full flex-col p-7 hover:shadow-card-hover ${
                  service.featured ? 'border-crimson/30 ring-1 ring-crimson/20' : ''
                }`}
              >
                {service.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-crimson-tint px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wide text-crimson">
                    Most requested
                  </span>
                )}

                <span className="h-12 w-12 text-crimson">
                  <ServiceIcon slug={service.slug} className="h-full w-full" />
                </span>

                <h3 className="mt-5 text-xl">{service.name}</h3>

                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {service.cardDesc}
                </p>

                <div className="mt-6 border-t border-paper-line pt-5">
                  {service.price ? (
                    <>
                      <span className="block text-[0.8125rem] text-ink-faint">Starting at</span>
                      <span className="mt-1 block">
                        <Price target={service.price} />
                      </span>
                    </>
                  ) : (
                    <span className="block text-[0.9375rem] text-ink-soft">
                      Priced after inspection
                    </span>
                  )}

                  <Link
                    to={`/services/${service.slug}`}
                    className={`mt-5 w-full ${service.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    Learn More
                    <ArrowIcon />
                  </Link>

                  <Link
                    to="/#contact"
                    className="mt-3 flex w-full items-center justify-center text-[0.9375rem] font-medium text-crimson hover:text-crimson-hover"
                  >
                    Book an appointment
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
