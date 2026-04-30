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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-neon-blue), transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Get In Touch
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Contact Info Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="glass p-5 rounded-xl hover:border-white/20 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-neon-blue)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-[var(--color-neon-blue)]" />
                </div>
                <div className="text-[0.6rem] text-white/40 uppercase tracking-wider font-semibold">Email</div>
              </div>
              <div className="text-sm text-white/80 pl-13">hello@d-portfolio.dev</div>
            </div>

            {/* Location Card */}
            <div className="glass p-5 rounded-xl hover:border-white/20 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-neon-purple)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={18} className="text-[var(--color-neon-purple)]" />
                </div>
                <div className="text-[0.6rem] text-white/40 uppercase tracking-wider font-semibold">Location</div>
              </div>
              <div className="text-sm text-white/80 pl-13">Remote — Worldwide</div>
            </div>

            {/* Social Links */}
            <div className="glass p-5 rounded-xl">
              <div className="text-[0.6rem] text-white/40 uppercase tracking-wider mb-4 font-semibold">
                Connect With Me
              </div>
              <div className="flex gap-3">
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
                    className="w-11 h-11 rounded-lg glass-strong flex items-center justify-center text-white/50 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass p-5 rounded-xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.04), transparent 70%)' }}
              />
              <Sparkles size={20} className="text-[var(--color-neon-cyan)]/60 mb-2 mx-auto" />
              <div className="text-xs font-semibold text-white/60 mb-1">Available for Work</div>
              <div className="text-[0.65rem] text-white/30">Freelance & Collaboration</div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass p-6 sm:p-7 rounded-xl space-y-5"
            id="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-[0.65rem] text-white/40 uppercase tracking-wider mb-2 font-semibold">
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
                <label htmlFor="contact-email" className="block text-[0.65rem] text-white/40 uppercase tracking-wider mb-2 font-semibold">
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
              <label htmlFor="contact-message" className="block text-[0.65rem] text-white/40 uppercase tracking-wider mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                className="form-input resize-none"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
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
        </div>
      </div>
    </section>
  );
}
