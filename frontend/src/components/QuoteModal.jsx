import { useEffect, useRef, useState } from 'react';
import { submitLead } from '../api/submitLead.js';
import { looksAutomated } from '../lib/honeypot.js';
import Field from './ui/Field.jsx';
import Honeypot from './ui/Honeypot.jsx';

const SEEN_KEY = 'mjamv-quote-seen';

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const firstFieldRef = useRef(null);

  const closeQuote = () => setOpen(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem(SEEN_KEY, '1');
      setOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape' && open) closeQuote();
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Show the normal success state so a bot cannot tell it was filtered
    if (looksAutomated(data)) {
      setStatus('sent');
      setTimeout(closeQuote, 2200);
      return;
    }

    setStatus('sending');
    try {
      await submitLead('Quote Popup', {
        name: data['qf-name'] || '',
        phone: data['qf-phone'] || '',
        service: data['qf-service'] || '',
        date: data['qf-date'] || '',
        time: data['qf-time'] || '',
        source: 'quote-form',
      });
      setStatus('sent');
      setTimeout(closeQuote, 2200);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-night/60" onClick={closeQuote} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="palette-light relative max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-xl bg-surface p-7 shadow-card-hover sm:p-8"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={closeQuote}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-faint transition-colors duration-200 hover:bg-paper-alt hover:text-ink"
        >
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" />
          </svg>
        </button>

        <p className="eyebrow">Limited Slots This Week</p>
        <h3 id="quote-modal-title" className="mt-2 text-2xl">
          Get a Free Quote
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          Tell us about your kitchen exhaust system and we will get back to you within 24 hours.
        </p>

        {status !== 'sent' ? (
          <form onSubmit={handleSubmit} className="relative mt-6">
            <Honeypot />
            <Field label="Full Name" htmlFor="qf-name">
              <input
                ref={firstFieldRef}
                type="text"
                id="qf-name"
                name="qf-name"
                placeholder="Juan dela Cruz"
                required
                className="field"
              />
            </Field>

            <Field label="Phone Number" htmlFor="qf-phone" required className="mt-5">
              <input type="tel" id="qf-phone" name="qf-phone" placeholder="+63 900 123 4567" required className="field" />
            </Field>

            <Field label="Choose a Service" htmlFor="qf-service" className="mt-5">
              <select id="qf-service" name="qf-service" required defaultValue="" className="field">
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="exhaust">Kitchen Exhaust Cleaning</option>
                <option value="inspection">Ocular Inspection</option>
                <option value="repairs">Minor Repairs</option>
              </select>
            </Field>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Date" htmlFor="qf-date">
                <input
                  type="date"
                  id="qf-date"
                  name="qf-date"
                  min={new Date().toISOString().slice(0, 10)}
                  className="field"
                />
              </Field>
              <Field label="Preferred Time" htmlFor="qf-time">
                <input type="time" id="qf-time" name="qf-time" className="field" />
              </Field>
            </div>

            {status === 'error' && (
              <p role="alert" className="mt-5 rounded-lg border border-crimson/30 bg-crimson-tint px-4 py-3 text-[0.9375rem] text-crimson-light">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Request My Free Quote'}
            </button>
          </form>
        ) : (
          <p className="mt-6 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-[0.9375rem] text-emerald-800">
            Thanks! We have received your request and will get back to you shortly.
          </p>
        )}

        <button
          type="button"
          onClick={closeQuote}
          className="mt-4 block w-full text-center text-[0.875rem] text-ink-faint transition-colors duration-200 hover:text-ink-soft"
        >
          No thanks, I&apos;ll browse first
        </button>
      </div>
    </div>
  );
}
