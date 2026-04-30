import { ChevronRight, Send, Code, Shield, Film, Palette } from 'lucide-react';
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
      className="relative min-h-screen flex items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Radial gradient orbs */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Status pill */}
            <div className="status-pill mb-4 w-fit">
              <span className="dot" />
              Available for projects
            </div>

            {/* Greeting */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-gradient-to-r from-[var(--color-neon-blue)] to-transparent" />
              <span className="text-[var(--color-neon-blue)] text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
                Welcome to my world
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className={`hero-d ${glitch ? 'hero-d-glitch' : ''}`} data-text="D">DaxterATI</span>
            </h1>

            {/* Tagline */}
            <p className="text-white/60 text-base sm:text-lg mb-6 leading-relaxed max-w-xl">
              A multi-disciplinary creator building at the intersection of <span className="text-[var(--color-neon-blue)] font-semibold">code</span>, <span className="text-[var(--color-neon-purple)] font-semibold">security</span>, and <span className="text-[var(--color-neon-cyan)] font-semibold">design</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <span className="flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </span>
              </a>
              <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Send size={16} /> Contact Me
              </a>
            </div>

            {/* Stats - Compact inline */}
            <div className="flex gap-6 sm:gap-8 pt-6 border-t border-white/5">
              {[
                { value: '25+', label: 'Projects' },
                { value: '3+', label: 'Years' },
                { value: '15+', label: 'Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </div>
                  <div className="text-[0.6rem] sm:text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Code, title: 'Web Dev', desc: 'React, Node.js, Next.js', color: '#00d4ff' },
                { icon: Shield, title: 'Security', desc: 'Ethical Hacking, OWASP', color: '#a855f7' },
                { icon: Film, title: 'Video', desc: 'Premiere, After Effects', color: '#06ffd2' },
                { icon: Palette, title: 'Design', desc: 'UI/UX, Figma, Branding', color: '#f472b6' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="glass p-4 sm:p-5 rounded-xl group hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="text-white text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </div>
                  <div className="text-white/40 text-xs leading-snug">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[var(--color-neon-blue)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
