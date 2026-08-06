import { useInView } from '../hooks/useInView.js';

export default function About() {
  const [copyRef, copyVisible] = useInView();
  const [imgRef, imgVisible] = useInView();

  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className={`about-copy reveal${copyVisible ? ' is-visible' : ''}`} ref={copyRef}>
            <div className="about-eyebrow">Who We Are</div>
            <h2 className={`about-h2 reveal-heading${copyVisible ? ' is-visible' : ''}`}>Expert Service, Delivered By People Who Care</h2>
            <p>Welcome to [Your Company], a family owned and operated business passionate about bringing comfort to yours.</p>
            <p>As a close-knit HVAC company, we combine the warmth of family values with the expertise of industry professionals. Our journey began with a shared commitment to providing personalized heating, ventilation, and air conditioning solutions. From cozy homes to bustling businesses, we deliver a personal touch to every project, ensuring your comfort is our priority.</p>
            <div className="about-actions">
              <a href="#about" className="btn btn-red">Learn More About Us</a>
              <a href="#contact" className="btn btn-dim">Schedule Now</a>
            </div>
          </div>
          <div className={`about-image reveal reveal-d1${imgVisible ? ' is-visible' : ''}`} ref={imgRef}>
            <div className="photo-placeholder">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#aaa" strokeWidth="1.5" aria-hidden="true">
                <rect x="4" y="9" width="44" height="34" rx="2" />
                <circle cx="20" cy="25" r="6" />
                <path d="M4 40l11-12 8 8 9-11 16 15" />
              </svg>
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
