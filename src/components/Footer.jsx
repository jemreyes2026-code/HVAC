const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#product' },
      { label: 'Demo', href: '#demo' },
      { label: 'Security', href: '#' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#company' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'HIPAA', href: '#' },
      { label: 'BAA', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-warm-border">
      <div className="wrap pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1F1E1C" className="transition-transform duration-300 group-hover:scale-110">
                <circle cx="9" cy="7" r="2.5" />
                <circle cx="15" cy="7" r="2.5" />
                <circle cx="9" cy="15.5" r="2.5" />
                <circle cx="15" cy="15.5" r="2.5" />
              </svg>
              <span className="text-xl font-serif text-warm tracking-tight">Lassie</span>
            </a>
            <p className="mt-4 text-sm text-warm-secondary leading-relaxed max-w-xs">
              AI that runs the doctor&apos;s office. Autonomous agents that handle the
              administrative work so your team can focus on patients.
            </p>
          </div>

          {/* Link Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold font-sans text-warm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-warm-secondary hover:text-warm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-warm-border pt-6 text-sm text-warm-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Lassie AI, Inc. All rights reserved.</span>
          <span>Built for healthcare practices.</span>
        </div>
      </div>
    </footer>
  );
}
