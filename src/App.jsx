import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoBar from './components/LogoBar.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <ActivityFeed />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
