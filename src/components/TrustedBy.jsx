import { useInView } from '../hooks/useInView.js';

const BRANDS = [
  { name: "Shakey's", style: { background: '#C4172D', color: '#fff' } },
  { name: 'Mang Inasal', style: { background: '#D95A10', color: '#fff' } },
  { name: 'KFC', style: { background: '#CC0000', color: '#fff' } },
  { name: 'Tokyo Tokyo', style: { background: '#111111', color: '#fff', border: '1.5px solid #CC1122' } },
  { name: 'Greenwich', style: { background: '#246B24', color: '#fff' } },
  { name: 'Jollibee', style: { background: '#CC1E2A', color: '#FFE000' } },
  { name: 'Mesa', style: { background: '#1B5E5B', color: '#fff' } },
  { name: 'S&R New York Style Pizza', style: { background: '#003087', color: '#fff' } },
  { name: 'Hap Chan', style: { background: '#CC1122', color: '#fff' } },
  { name: 'Marugame Udon', style: { background: '#1E1E1E', color: '#E8C47A', border: '1.5px solid #E8C47A' } },
  { name: 'Kangyupsalamat', style: { background: '#E8A000', color: '#1A1A1A' } },
  { name: "Gerry's", style: { background: '#E05800', color: '#fff' } },
  { name: 'Ling Nam', style: { background: '#8B1A1A', color: '#fff' } },
  { name: 'Chowking', style: { background: '#CC1122', color: '#fff' } },
];

export default function TrustedBy() {
  const [labelRef, labelVisible] = useInView();
  const [trackRef, trackVisible] = useInView();

  return (
    <section className="trusted-section">
      <div className="wrap">
        <p className={`trusted-label reveal${labelVisible ? ' is-visible' : ''}`} ref={labelRef}>
          Trusted By Leading Food Establishments
        </p>
        <div className={`brand-track stagger${trackVisible ? ' is-visible' : ''}`} ref={trackRef}>
          {BRANDS.map((brand) => (
            <span key={brand.name} className="brand-pill" style={brand.style}>{brand.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
