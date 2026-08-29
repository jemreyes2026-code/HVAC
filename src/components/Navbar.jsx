import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Company', href: '#company' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Lassie</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200">
            Log in
          </a>
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[72px] left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="wrap py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-dark-border flex flex-col gap-3">
            <a href="#contact" className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2">
              Log in
            </a>
            <a href="#contact" className="btn-primary text-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
