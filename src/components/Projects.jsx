import { useEffect, useState } from 'react';
import { fetchGallery } from '../lib/gallery.js';
import Reveal from './ui/Reveal.jsx';
import SectionHead from './ui/SectionHead.jsx';

/** Turns "2026-03-shakeys-makati.jpg" into "Shakeys Makati" for the caption. */
function captionFor(fileName) {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/^[\d-]+/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function PlaceholderTile() {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-stone bg-paper-alt">
      <svg
        width="34"
        height="34"
        viewBox="0 0 52 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="text-stone"
        aria-hidden="true"
      >
        <rect x="4" y="9" width="44" height="34" rx="3" />
        <circle cx="20" cy="25" r="6" />
        <path d="M4 40l11-12 8 8 9-11 16 15" />
      </svg>
      <span className="text-[0.8125rem] text-ink-muted">Project photo</span>
    </div>
  );
}

export default function Projects() {
  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState('loading'); // loading | ready | empty | error
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchGallery()
      .then((items) => {
        if (cancelled) return;
        setPhotos(items);
        setState(items.length ? 'ready' : 'empty');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Could not load the project gallery:', err);
        setState('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setLightbox(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Work"
          title="Recent projects"
          lead="Kitchens we have cleaned across Metro Manila — before, during, and after."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {state === 'ready'
            ? photos.map((photo, i) => (
                <Reveal key={photo.name} delay={Math.min(i, 5) * 80}>
                  <button
                    type="button"
                    onClick={() => setLightbox(photo)}
                    className="group block w-full overflow-hidden rounded-xl border border-paper-line bg-white text-left shadow-card transition-shadow duration-200 hover:shadow-card-hover"
                  >
                    <span className="block aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.url}
                        alt={captionFor(photo.name)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block px-4 py-3 text-[0.9375rem] font-medium text-ink">
                      {captionFor(photo.name)}
                    </span>
                  </button>
                </Reveal>
              ))
            : [0, 1, 2, 3, 4, 5].map((i) => (
                <Reveal key={i} delay={Math.min(i, 5) * 80}>
                  <PlaceholderTile />
                </Reveal>
              ))}
        </div>

        {state !== 'ready' && (
          <Reveal delay={200} className="mt-8 text-center">
            <p className="text-[0.9375rem] text-ink-soft">
              {state === 'error'
                ? 'The project gallery could not be loaded right now.'
                : 'Photos appear here automatically once they are uploaded to the gallery folder in Firebase Storage.'}
            </p>
          </Reveal>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={captionFor(lightbox.name)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/25"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl">
            <img
              src={lightbox.url}
              alt={captionFor(lightbox.name)}
              className="max-h-[80dvh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-[0.9375rem] text-white">
              {captionFor(lightbox.name)}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
