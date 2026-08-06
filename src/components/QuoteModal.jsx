import { useEffect, useRef, useState } from 'react';
import { submitToSheet } from '../lib/submitToSheet.js';

const SEEN_KEY = 'mjamv-quote-seen';

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);
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
      const t = setTimeout(() => firstFieldRef.current?.focus(), 400);
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
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      await submitToSheet({
        form: 'Quote Popup',
        name: data['qf-name'] || '',
        phone: data['qf-phone'] || '',
        email: '',
        service: data['qf-service'] || '',
        date: data['qf-date'] || '',
        time: data['qf-time'] || '',
        message: '',
      });
      setStatus('sent');
      setTimeout(closeQuote, 2200);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className={`quote-modal${open ? ' open' : ''}`} id="quote-modal" aria-hidden={!open}>
      <div className="quote-backdrop" onClick={closeQuote}></div>
      <div className="quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
        <button className="quote-close" type="button" aria-label="Close" onClick={closeQuote}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5l11 11M12.5 1.5l-11 11" /></svg>
        </button>
        <p className="quote-eyebrow">Limited Slots This Week</p>
        <h3 className="quote-title" id="quote-modal-title">Get a Free Quote</h3>
        <p className="quote-sub">Tell us a bit about your kitchen exhaust system and we'll get back to you within 24 hours.</p>

        {status !== 'sent' && (
          <form className="quote-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="qf-name">Full Name</label>
              <input type="text" id="qf-name" name="qf-name" placeholder="Juan dela Cruz" required ref={firstFieldRef} />
            </div>
            <div className="form-group">
              <label htmlFor="qf-phone">Phone Number <span className="field-required" aria-hidden="true">*</span></label>
              <input type="tel" id="qf-phone" name="qf-phone" placeholder="+63 900 123 4567" required />
            </div>
            <div className="form-group">
              <label htmlFor="qf-service">Choose a Service</label>
              <select id="qf-service" name="qf-service" required defaultValue="">
                <option value="" disabled>Select a service…</option>
                <option value="exhaust">Kitchen Exhaust Cleaning</option>
                <option value="inspection">Ocular Inspection</option>
                <option value="repairs">Minor Repairs</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="qf-date">Preferred Date</label>
                <input type="date" id="qf-date" name="qf-date" min={new Date().toISOString().slice(0, 10)} />
              </div>
              <div className="form-group">
                <label htmlFor="qf-time">Preferred Time</label>
                <input type="time" id="qf-time" name="qf-time" />
              </div>
            </div>
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again or call us directly.</p>
            )}
            <button type="submit" className="contact-submit quote-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Request My Free Quote'}
            </button>
          </form>
        )}

        <p className={`quote-thanks${status === 'sent' ? ' show' : ''}`}>
          Thanks! We've received your request and will get back to you shortly.
        </p>
        <button type="button" className="quote-dismiss" onClick={closeQuote}>No thanks, I'll browse first</button>
      </div>
    </div>
  );
}
