import { useState } from 'react';
import { submitLead } from '../lib/submitLead.js';
import Reveal from './ui/Reveal.jsx';
import Field from './ui/Field.jsx';

const DETAILS = [
  {
    label: 'Phone',
    value: '+63 900 123 4567',
    href: 'tel:+639001234567',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.31 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: 'Email',
    value: 'info@yourcompany.com',
    href: 'mailto:info@yourcompany.com',
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: 'Facebook',
    value: 'Follow us on Facebook',
    href: '#contact',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      await submitLead('Contact Form', {
        name: `${data.fname || ''} ${data.lname || ''}`.trim(),
        phone: data.phone || '',
        email: data.email || '',
        service: data.service || '',
        date: data['booking-date'] || '',
        time: data['booking-time'] || '',
        message: data.message || '',
        source: 'contact-form',
      });
      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section border-t border-paper-line bg-paper-alt">
      <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">Contact us</h2>

          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">
            Ready to schedule a cleaning or have questions? Send us a message and our team will get
            back to you promptly.
          </p>

          <a
            href="tel:+639001234567"
            className="mt-6 inline-block text-2xl font-bold text-crimson hover:text-crimson-hover"
          >
            +63 900 123 4567
          </a>

          <div className="mt-8 space-y-4">
            {DETAILS.map((d) => (
              <a key={d.label} href={d.href} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson-tint text-crimson">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    {d.icon}
                  </svg>
                </span>
                <span>
                  <span className="block text-[0.8125rem] text-ink-faint">{d.label}</span>
                  <span className="block font-medium text-ink group-hover:text-crimson">
                    {d.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card p-7 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" htmlFor="fname">
                <input type="text" id="fname" name="fname" placeholder="Juan" required className="field" />
              </Field>
              <Field label="Last Name" htmlFor="lname">
                <input type="text" id="lname" name="lname" placeholder="dela Cruz" required className="field" />
              </Field>
            </div>

            <Field label="Phone Number" htmlFor="phone" required className="mt-5">
              <input type="tel" id="phone" name="phone" placeholder="+63 900 123 4567" required className="field" />
            </Field>

            <Field label="Email Address" htmlFor="email" className="mt-5">
              <input type="email" id="email" name="email" placeholder="juan@example.com" required className="field" />
            </Field>

            <Field label="Choose a Service" htmlFor="service" className="mt-5">
              <select id="service" name="service" required defaultValue="" className="field">
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="exhaust">Kitchen Exhaust Cleaning</option>
                <option value="inspection">Ocular Inspection</option>
                <option value="repairs">Minor Repairs</option>
              </select>
            </Field>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Date" htmlFor="booking-date">
                <input
                  type="date"
                  id="booking-date"
                  name="booking-date"
                  min={new Date().toISOString().slice(0, 10)}
                  className="field"
                />
              </Field>
              <Field label="Preferred Time" htmlFor="booking-time">
                <input type="time" id="booking-time" name="booking-time" className="field" />
              </Field>
            </div>

            <Field label="Message" htmlFor="message" className="mt-5">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Hood size, how many filters, when you close…"
                className="field resize-none"
              />
            </Field>

            {status === 'error' && (
              <p className="mt-5 rounded-lg border border-crimson/30 bg-crimson-tint px-4 py-3 text-[0.9375rem] text-crimson-hover">
                Something went wrong sending your message. Please try again or call us directly.
              </p>
            )}
            {status === 'sent' && (
              <p className="mt-5 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-[0.9375rem] text-emerald-800">
                Thanks! We have received your message and will get back to you shortly.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
