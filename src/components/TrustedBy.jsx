import Reveal from './ui/Reveal.jsx';

const BRANDS = [
  "Shakey's",
  'Mang Inasal',
  'KFC',
  'Tokyo Tokyo',
  'Greenwich',
  'Jollibee',
  'Mesa',
  'S&R New York Style Pizza',
  'Hap Chan',
  'Marugame Udon',
  'Kangyupsalamat',
  "Gerry's",
  'Ling Nam',
  'Chowking',
];

function Track({ ariaHidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={ariaHidden || undefined}>
      {BRANDS.map((name) => (
        <li
          key={name}
          className="whitespace-nowrap rounded-lg border border-paper-line bg-white px-5 py-2.5 text-[0.9375rem] font-medium text-ink-soft"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function TrustedBy() {
  return (
    <section className="overflow-hidden border-b border-paper-line bg-paper-alt py-12">
      <Reveal className="wrap">
        <p className="text-center text-[0.9375rem] font-medium text-ink-soft">
          Trusted by leading food establishments
        </p>
      </Reveal>

      <div className="relative mt-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-alt to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-alt to-transparent" aria-hidden="true" />
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
