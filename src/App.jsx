import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import ScrollRestoration from './components/ScrollRestoration.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicePage from './pages/ServicePage.jsx';

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
      <QuoteModal />
    </>
  );
}
