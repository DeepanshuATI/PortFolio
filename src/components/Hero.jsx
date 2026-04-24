import { ChevronRight, Send, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-padding"
    >
      {/* Animated D background */}
      <div className="d-logo-hero animate-pulse-glow select-none" aria-hidden="true">
        D
      </div>

      {/* Radial gradient orbs */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)' }}
      />

      {/* Animated ring behind the D */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none" aria-hidden="true">
        <svg width="420" height="420" viewBox="0 0 420 420" className="animate-spin-slow opacity-10">
          <circle cx="210" cy="210" r="200" fill="none" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="12 8" />
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06ffd2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Status pill */}
          <div className="status-pill mb-5 w-fit">
            <span className="dot" />
            Available for projects
          </div>

          {/* Greeting */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-[var(--color-neon-blue)] to-transparent" />
            <span className="text-[var(--color-neon-blue)] text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
              Welcome to my world
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className={`hero-d ${glitch ? 'hero-d-glitch' : ''}`} data-text="D">D</span>
          </h1>

          {/* Tagline */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.85rem] sm:text-base mb-12">
            <span className="text-white/80 font-medium">Web Developer</span>
            <span className="text-[var(--color-neon-blue)] hidden sm:inline">·</span>
            <span className="text-white/80 font-medium">Cybersecurity Enthusiast</span>
            <span className="text-[var(--color-neon-purple)] hidden sm:inline">·</span>
            <span className="text-white/80 font-medium">Video Editor</span>
            <span className="text-[var(--color-neon-cyan)] hidden sm:inline">·</span>
            <span className="text-white/80 font-medium">Designer</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span className="flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </span>
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Send size={16} /> Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 sm:gap-16 mt-24 pt-12 border-t border-white/5">
            {[
              { value: '25+', label: 'Projects' },
              { value: '3+', label: 'Years Exp' },
              { value: '15+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-[0.65rem] sm:text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[var(--color-neon-blue)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
