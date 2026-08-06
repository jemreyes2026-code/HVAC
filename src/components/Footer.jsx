export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="wrap">
        <div className="footer-grid">

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 118" height="50" role="img" aria-label="MJAMV General Cleaning Services">
              <defs><path id="mjamv-arc-f" d="M 15,90 A 160,160 0 0,1 265,90" /></defs>
              <text fontFamily="Impact,'Arial Black',sans-serif" fontSize="44" fill="#C41230" stroke="#C0C0C0" strokeWidth="3" paintOrder="stroke fill" letterSpacing="2">
                <textPath href="#mjamv-arc-f" startOffset="50%" textAnchor="middle">MJAMV</textPath>
              </text>
              <text x="140" y="112" textAnchor="middle" fontFamily="Arial,'Helvetica Neue',sans-serif" fontSize="17" fontWeight="700" fill="white" letterSpacing="0.5">GENERAL CLEANING SERVICES</text>
            </svg>
            <p className="footer-tag">Heating, cooling, and air flow services in Your City and surrounding areas. Family owned and operated.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Heating &amp; Cooling</a></li>
              <li><a href="#services">Gas Fitting</a></li>
              <li><a href="#services">Refrigeration</a></li>
              <li><a href="#services">Ventilation</a></li>
              <li><a href="#services">Installation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+17785551234">(778) 555-1234</a></li>
              <li><a href="mailto:info@yourhvac.com">info@yourhvac.com</a></li>
              <li><a href="#contact">Your City, BC</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2025 Your HVAC Company Ltd. All rights reserved.</span>
          <span>Designed with care</span>
        </div>
      </div>
    </footer>
  );
}
