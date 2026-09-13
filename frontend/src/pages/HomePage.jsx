import Hero from '../components/Hero.jsx';
import TrustedBy from '../components/TrustedBy.jsx';
import Services from '../components/Services.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Features from '../components/Features.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ServiceAreas from '../components/ServiceAreas.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function HomePage() {
  usePageMeta(
    'MJAMV General Cleaning Services — Kitchen Exhaust Cleaning & HVAC',
    'Commercial kitchen exhaust cleaning, ocular inspection, and exhaust repairs across Metro Manila. Free quotes.'
  );

  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Projects />
      <Features />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
    </>
  );
}
