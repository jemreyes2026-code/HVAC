import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Company', href: '#company' },
  { label: 'Demo', href: '#demo' },
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-nav'
            : 'bg-cream-light/80 backdrop-blur-xl shadow-nav'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-warm/5 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1F1E1C">
            <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8.5 8.5 10 10 11C8 11.5 6.5 13.5 6.5 15.5C6.5 18 8.5 20 11 20H13C15.5 20 17.5 18 17.5 15.5C17.5 13.5 16 11.5 14 11C15.5 10 16.5 8.5 16.5 6.5C16.5 4 14.5 2 12 2Z" />
            <circle cx="9" cy="7" r="2.5" fill="#1F1E1C" />
            <circle cx="15" cy="7" r="2.5" fill="#1F1E1C" />
            <circle cx="9" cy="15.5" r="2.5" fill="#1F1E1C" />
            <circle cx="15" cy="15.5" r="2.5" fill="#1F1E1C" />
          </svg>
        </a>

        {/* Nav Links */}
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hidden sm:flex items-center px-4 py-2 rounded-full text-sm font-medium text-warm hover:bg-warm/5 transition-colors"
          >
            {link.label}
          </a>
        ))}

        {/* Login */}
        <a
          href="#contact"
          className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-warm-secondary hover:bg-warm/5 transition-colors"
        >
          Login
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full text-warm hover:bg-warm/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-0 top-[72px] bg-cream/95 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center gap-4 pt-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-warm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-warm-secondary"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
