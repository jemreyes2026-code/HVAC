import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#hero', label: 'Home', id: 'hero' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#about', label: 'About Us', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#faq', label: 'FAQ', id: 'faq' },
];

const SCROLL_ANCHORS = ['hero', 'services', 'about', 'features', 'testimonials', 'areas', 'contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      let next = 'hero';
      SCROLL_ANCHORS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) next = id;
      });
      setActive(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header" id="site-header">
      <div className="wrap header-row">
        <a href="#hero" className="logo-wrap" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 118" height="56" role="img" aria-label="MJAMV General Cleaning Services">
            <defs><path id="mjamv-arc-h" d="M 15,90 A 160,160 0 0,1 265,90" /></defs>
            <text fontFamily="Impact,'Arial Black',sans-serif" fontSize="44" fill="#C41230" stroke="#C0C0C0" strokeWidth="3" paintOrder="stroke fill" letterSpacing="2">
              <textPath href="#mjamv-arc-h" startOffset="50%" textAnchor="middle">MJAMV</textPath>
            </text>
            <text x="140" y="112" textAnchor="middle" fontFamily="Arial,'Helvetica Neue',sans-serif" fontSize="17" fontWeight="700" fill="white" letterSpacing="0.5">GENERAL CLEANING SERVICES</text>
          </svg>
        </a>

        <button
          className={`burger${open ? ' open' : ''}`}
          id="burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`main-nav${open ? ' open' : ''}`} id="main-nav" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
