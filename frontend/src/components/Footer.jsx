import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services.js';
import Logo from './ui/Logo.jsx';
import Reveal from './ui/Reveal.jsx';

const COLUMNS = [
  {
    title: 'Services',
    links: SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/#about' },
      { label: 'Projects', to: '/#projects' },
      { label: 'Reviews', to: '/#testimonials' },
      { label: 'FAQ', to: '/#faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '+63 900 123 4567', href: 'tel:+639001234567' },
      { label: 'info@yourcompany.com', href: 'mailto:info@yourcompany.com' },
      { label: 'Metro Manila, Philippines', to: '/#areas' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-night text-white/70">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <Reveal>
            <div className="rounded-lg bg-white/95 p-3">
              <Logo height={42} className="h-10 w-auto" />
            </div>
            <p className="mt-5 text-[0.9375rem] leading-relaxed">
              Commercial kitchen exhaust cleaning across Metro Manila. Family owned and operated.
            </p>
          </Reveal>

          {COLUMNS.map((col, i) => (
            <Reveal key={col.title} delay={(i + 1) * 80}>
              <h4 className="text-[0.9375rem] font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className="text-[0.9375rem] transition-colors duration-200 hover:text-white">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-[0.9375rem] transition-colors duration-200 hover:text-white">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.875rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} MJAMV General Cleaning Services. All rights reserved.
          </span>
          <span>Clean systems, open kitchens.</span>
        </div>
      </div>
    </footer>
  );
}
