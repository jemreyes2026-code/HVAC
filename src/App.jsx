import CurtainIntro from './components/CurtainIntro.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import TrustedBy from './components/TrustedBy.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import ServiceAreas from './components/ServiceAreas.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import { useNoMotion } from './hooks/useNoMotion.js';

export default function App() {
  const noMotion = useNoMotion();

  return (
    <>
      <CurtainIntro noMotion={noMotion} />
      <Header />
      <Hero noMotion={noMotion} />
      <Services />
      <About />
      <TrustedBy />
      <Features />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollTop />
      <QuoteModal />
    </>
  );
}
