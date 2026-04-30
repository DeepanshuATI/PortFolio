import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../data.jsx';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-neon-blue)]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-3xl sm:text-4xl font-black gradient-text"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              D
            </span>
            <div className="text-white/30 text-sm">
              <span className="text-white/50 font-medium">Portfolio</span>
              <br />
              <span className="text-xs">Built with passion & code</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
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
                className="text-white/30 hover:text-[var(--color-neon-blue)] transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white/25 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} <span className="text-white/40">D</span>. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to top — now only shows after scrolling down */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-strong flex items-center justify-center text-white/40 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 hover:-translate-y-1 neon-glow ${showTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
        id="scroll-to-top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
