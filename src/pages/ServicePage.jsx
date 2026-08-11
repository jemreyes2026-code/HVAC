import { Link, Navigate, useParams } from 'react-router-dom';
import { SERVICES, SERVICE_BY_SLUG } from '../data/services.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/ui/Reveal.jsx';
import ServiceIcon from '../components/ui/ServiceIcon.jsx';
import Contact from '../components/Contact.jsx';

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];

  usePageMeta(
    service && `${service.name} — MJAMV General Cleaning Services`,
    service && service.tagline
  );

  if (!service) return <Navigate to="/" replace />;

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-paper-line bg-paper-alt">
        <div className="wrap py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-[0.875rem] text-ink-faint">
            <Link to="/" className="hover:text-crimson">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/#services" className="hover:text-crimson">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-soft">{service.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson-tint text-crimson">
                <ServiceIcon slug={service.slug} className="h-7 w-7" />
              </span>

              <h1 className="mt-5 text-[clamp(2rem,4.5vw,3rem)] leading-tight">{service.name}</h1>

              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                {service.tagline}
              </p>

              {service.price ? (
                <p className="mt-6 text-[0.9375rem] text-ink-soft">
                  Starting at{' '}
                  <span className="text-2xl font-bold text-ink">
                    ₱{service.price.toLocaleString()}
                  </span>
                </p>
              ) : (
                <p className="mt-6 text-[0.9375rem] text-ink-soft">Priced after inspection</p>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/#contact" className="btn-primary">
                  Schedule a Service
                </Link>
                <Link to="/#faq" className="btn-secondary">
                  Browse Our FAQ
                </Link>
              </div>
            </div>

            {/* Replace with a photo of this specific service being carried out */}
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-paper-line bg-white shadow-card">
              <svg width="44" height="44" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-stone" aria-hidden="true">
                <rect x="4" y="9" width="44" height="34" rx="3" />
                <circle cx="20" cy="25" r="6" />
                <path d="M4 40l11-12 8 8 9-11 16 15" />
              </svg>
              <span className="text-[0.875rem] text-ink-faint">{service.name} photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-3 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Our Expertise</p>
            <h2 className="mt-3 text-[clamp(1.625rem,3vw,2.25rem)] leading-tight">
              {service.heading}
            </h2>

            <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft">
              {service.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            <Link to="/#contact" className="btn-primary mt-8">
              Schedule Now
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-7">
              <h3 className="text-lg">What&apos;s included</h3>
              <ul className="mt-5 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-tint text-crimson">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service-specific FAQ */}
      <section className="section border-y border-paper-line bg-paper-alt">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-[clamp(1.625rem,3vw,2.25rem)] leading-tight">
              About {service.name.toLowerCase()}
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {service.faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 90}>
                <div className="card p-6">
                  <h3 className="text-[1.0625rem]">{item.q}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8 text-center">
            <p className="text-[0.9375rem] text-ink-soft">
              Have a question we have not covered?{' '}
              <Link to="/#contact" className="font-medium text-crimson hover:text-crimson-hover">
                Contact us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">More From Us</p>
            <h2 className="mt-3 text-[clamp(1.625rem,3vw,2.25rem)] leading-tight">
              Our other services
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 100}>
                <Link
                  to={`/services/${other.slug}`}
                  className="card flex h-full flex-col p-7 hover:shadow-card-hover"
                >
                  <span className="h-11 w-11 text-crimson">
                    <ServiceIcon slug={other.slug} className="h-full w-full" />
                  </span>
                  <h3 className="mt-4 text-lg">{other.name}</h3>
                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {other.cardDesc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-crimson">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
