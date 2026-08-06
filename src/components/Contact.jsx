import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView.js';
import { useMagnetic } from '../hooks/useMagnetic.js';
import { useNoMotion } from '../hooks/useNoMotion.js';
import { submitToSheet } from '../lib/submitToSheet.js';

export default function Contact() {
  const [infoRef, infoVisible] = useInView();
  const [formWrapRef, formWrapVisible] = useInView();
  const noMotion = useNoMotion();
  const submitRef = useRef(null);
  useMagnetic(submitRef, noMotion);

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      await submitToSheet({
        form: 'Contact Form',
        name: `${data.fname || ''} ${data.lname || ''}`.trim(),
        phone: data.phone || '',
        email: data.email || '',
        service: data.service || '',
        date: data['booking-date'] || '',
        time: data['booking-time'] || '',
        message: data.message || '',
      });
      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="contact-grid">

          <div className={`contact-info reveal${infoVisible ? ' is-visible' : ''}`} ref={infoRef}>
            <div className="contact-eyebrow">Get In Touch</div>
            <h2 className={`contact-h2 reveal-heading${infoVisible ? ' is-visible' : ''}`}>Contact Us</h2>
            <a href="tel:+639001234567" className="contact-phone-hero">+63 900 123 4567</a>
            <p className="contact-tagline">Ready to schedule a cleaning or have questions? Reach out and our team will get back to you promptly.</p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div className="contact-detail-body">
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value"><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.31 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div className="contact-detail-body">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value"><a href="tel:+639001234567">+63 900 123 4567</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>
                <div className="contact-detail-body">
                  <div className="contact-detail-label">Socials</div>
                  <div className="contact-detail-value"><a href="#contact">Follow us on Facebook</a></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`reveal reveal-d1${formWrapVisible ? ' is-visible' : ''}`} ref={formWrapRef}>
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="fname" placeholder="Juan" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lname" placeholder="dela Cruz" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number <span className="field-required" aria-hidden="true">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="+63 900 123 4567" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="juan@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Choose a Service</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option value="exhaust">Kitchen Exhaust Cleaning</option>
                  <option value="inspection">Ocular Inspection</option>
                  <option value="repairs">Minor Repairs</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-date">Preferred Date</label>
                  <input type="date" id="booking-date" name="booking-date" min={new Date().toISOString().slice(0, 10)} />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-time">Preferred Time</label>
                  <input type="time" id="booking-time" name="booking-time" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us more about your needs…"></textarea>
              </div>

              {status === 'error' && (
                <p className="form-status error">Something went wrong sending your message. Please try again or call us directly.</p>
              )}
              {status === 'sent' && (
                <p className="form-status success">Thanks! We've received your message and will get back to you shortly.</p>
              )}

              <button type="submit" className="contact-submit" ref={submitRef} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
