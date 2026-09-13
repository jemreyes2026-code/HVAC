import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../data/services.js';
import Logo from './ui/Logo.jsx';

const LINKS = [
  { to: '/#about', label: 'About Us' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#areas', label: 'Service Areas' },
  { to: '/#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Close both menus whenever the route changes */
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickAway = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickAway);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickAway);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const onServices = pathname.startsWith('/services');

  return (
    /* Dark chrome top and bottom (this bar and the footer) bracketing the cream
       page. Focus rings get an ink offset so they read against the dark ground. */
    <header className="sticky top-0 z-50 bg-night shadow-header [&_:focus-visible]:ring-offset-night">
      <div className="hidden border-b border-white/10 bg-crimson-hover sm:block">
        <div className="wrap flex items-center justify-between py-2 text-[0.8125rem] text-white/60">
          <span>Commercial kitchen exhaust cleaning across Metro Manila</span>
          <a href="tel:+639001234567" className="font-medium text-white hover:text-crimson-light">
            Call us: +63 900 123 4567
          </a>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-6 py-3">
        <Link to="/" aria-label="MJAMV, home" className="shrink-0">
          <Logo height={44} subColor="#FFFFFF" className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((o) => !o)}
              className={`relative flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                onServices ? 'text-white' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M3 5l4 4 4-4" />
              </svg>
              {onServices && (
                <span
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-crimson-light"
                  aria-hidden="true"
                />
              )}
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-white/10 bg-night p-2 shadow-card-hover">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.07]"
                  >
                    <span className="block text-[0.9375rem] font-medium text-white">
                      {service.name}
                    </span>
                    <span className="mt-0.5 block text-[0.8125rem] text-white/55">
                      {service.price
                        ? `Starting at ₱${service.price.toLocaleString()}`
                        : 'Priced after inspection'}
                    </span>
                  </Link>
                ))}
                <Link
                  to="/#services"
                  className="mt-1 block rounded-lg px-3 py-2 text-[0.875rem] font-medium text-crimson-light hover:bg-white/[0.07]"
                >
                  View all services
                </Link>
              </div>
            )}
          </div>

          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-[0.9375rem] font-medium text-white/70 transition-colors duration-200 hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/#contact" className="btn-primary hidden sm:inline-flex">
            Get a Free Quote
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors duration-200 hover:bg-white/[0.07] lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-white/10 bg-night lg:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-2">
            <span className="pt-3 text-[0.8125rem] font-bold uppercase tracking-wide text-white/50">
              Services
            </span>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="border-b border-white/10 py-3 text-[0.9375rem] font-medium text-white"
              >
                {service.name}
              </Link>
            ))}

            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-white/10 py-3 text-[0.9375rem] font-medium text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/#contact" className="btn-primary my-3">
              Get a Free Quote
            </Link>
            <a href="tel:+639001234567" className="pb-3 text-[0.9375rem] font-medium text-crimson-light">
              Call: +63 900 123 4567
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
