import { useState } from 'react';
import { Send, Mail, MapPin, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../data.jsx';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-neon-blue), transparent)' }} />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass p-6 sm:p-8 rounded-2xl space-y-6"
            id="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs text-white/40 uppercase tracking-wider mb-2.5 font-semibold">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs text-white/40 uppercase tracking-wider mb-2.5 font-semibold">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs text-white/40 uppercase tracking-wider mb-2.5 font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                required
                className="form-input resize-none"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
              disabled={submitted}
            >
              <span className="flex items-center gap-2 justify-center">
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </span>
            </button>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info card */}
            <div className="glass p-6 sm:p-7 rounded-2xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-neon-blue)]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[var(--color-neon-blue)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[0.65rem] text-white/40 uppercase tracking-wider">Email</div>
                  <div className="text-sm text-white/80 truncate">hello@d-portfolio.dev</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-neon-purple)]/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[var(--color-neon-purple)]" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-white/40 uppercase tracking-wider">Location</div>
                  <div className="text-sm text-white/80">Remote — Worldwide</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass p-6 sm:p-7 rounded-2xl">
              <div className="text-[0.65rem] text-white/40 uppercase tracking-wider mb-5 font-semibold">
                Connect
              </div>
              <div className="flex gap-5">
                {[
                  { icon: GithubIcon, url: 'https://github.com', label: 'GitHub' },
                  { icon: LinkedinIcon, url: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: InstagramIcon, url: 'https://instagram.com', label: 'Instagram' },
                ].map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-strong flex items-center justify-center text-white/50 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card replacing the empty "D" placeholder */}
            <div className="glass p-6 sm:p-7 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.04), transparent 70%)' }}
              />
              <Sparkles size={24} className="text-[var(--color-neon-cyan)]/60 mb-3" />
              <div className="text-sm font-semibold text-white/60 mb-1">Let's Build Something</div>
              <div className="text-xs text-white/30">Open for freelance & collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
