import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services.js';
import { useCountUp } from '../hooks/useCountUp.js';
import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';
import ServiceIcon from './ui/ServiceIcon.jsx';

function Price({ target, featured = false }) {
  const [ref, value] = useCountUp(target, 1100);
  return (
    <span ref={ref} className={`text-3xl font-bold ${featured ? 'text-white' : 'text-black'}`}>
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
    <section id="services" className="section palette-light palette-cream">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Services"
          title="What we do"
          className="[&_h2]:font-black [&_h2]:text-black [&_p]:font-bold [&_p]:text-black"
          lead="Three services covering the full life of a commercial kitchen exhaust system."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100} className="md:row-span-5 md:grid md:grid-rows-subgrid md:gap-y-0">
              <div
                className={`card flex h-full flex-col p-7 hover:shadow-card-hover md:row-span-5 md:grid md:grid-rows-subgrid md:gap-y-0 ${
                  service.featured ? 'bg-[#7A2929] border-[#7A2929] text-white ring-1 ring-[#7A2929]/20' : 'bg-white'
                }`}
              >
                <div className={service.featured ? '' : 'hidden md:block'}>
                {service.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wide text-black">
                    Most requested
                  </span>
                )}
                </div>

                <span className={`h-12 w-12 shrink-0 text-crimson-light ${service.featured ? '[&_img]:brightness-0 [&_img]:invert' : ''}`}>
                  <ServiceIcon slug={service.slug} className="h-full w-full" />
                </span>

                <h3 className={`mt-5 text-xl font-black ${service.featured ? 'text-white' : 'text-black'}`}>{service.name}</h3>

                <p className={`mt-3 flex-1 text-[0.9375rem] font-bold leading-relaxed ${service.featured ? 'text-white' : 'text-black'}`}>
                  {service.cardDesc}
                </p>

                <div className={`mt-6 border-t pt-5 ${service.featured ? 'border-white/30' : 'border-paper-line'}`}>
                  <div className="md:min-h-[4.25rem]">
                  {service.price ? (
                    <>
                      <span className={`block text-[0.8125rem] font-bold ${service.featured ? 'text-white' : 'text-black'}`}>Starting at</span>
                      <span className="mt-1 block">
                        <Price target={service.price} featured={service.featured} />
                      </span>
                    </>
                  ) : (
                    <span className={`block text-[0.9375rem] font-bold ${service.featured ? 'text-white' : 'text-black'}`}>
                      Priced after inspection
                    </span>
                  )}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className={`mt-5 w-full font-bold ${service.featured ? 'btn bg-white text-crimson hover:bg-red-50' : 'btn-secondary bg-white text-black'}`}
                  >
                    Learn More
                    <ArrowIcon />
                  </Link>

                  <Link
                    to="/#contact"
                    className={`mt-3 flex w-full items-center justify-center text-[0.9375rem] font-bold ${service.featured ? 'text-white hover:text-white/80' : 'text-black hover:text-crimson-hover'}`}
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
