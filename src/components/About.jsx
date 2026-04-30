import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Zap, Globe } from 'lucide-react';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            About Me
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            A multi-disciplinary creator building at the intersection of code, security, and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left — Bio */}
          <div className="reveal-left space-y-4">
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              I'm a <span className="text-white font-semibold">full-stack developer</span> and{' '}
              <span className="text-white font-semibold">creative technologist</span> passionate about building
              digital experiences that are both beautiful and secure. My work spans from crafting sleek user
              interfaces to hardening systems against cyber threats.
            </p>
            <p className="text-white/50 leading-relaxed text-sm">
              With a background in web development, cybersecurity, and visual storytelling, I bring a unique
              perspective to every project. I believe in the power of clean code, thoughtful design, and
              continuous learning.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { icon: Award, title: 'Multi-disciplinary', desc: 'Code, design & security', color: 'var(--color-neon-blue)' },
                { icon: Zap, title: 'Fast Learner', desc: 'Always exploring', color: 'var(--color-neon-purple)' },
                { icon: Globe, title: 'Remote Ready', desc: 'Work from anywhere', color: 'var(--color-neon-cyan)' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="glass p-3 sm:p-4 rounded-lg text-center group hover:border-[var(--color-neon-blue)]/30 transition-all duration-300"
                >
                  <Icon size={18} className="mx-auto mb-1.5 group-hover:scale-110 transition-transform" style={{ color }} />
                  <div className="text-white text-[0.65rem] sm:text-xs font-semibold leading-tight">{title}</div>
                  <div className="text-white/40 text-[0.6rem] mt-0.5 leading-tight">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Animated D Card */}
          <div className="reveal-right flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass-strong p-8 sm:p-10 rounded-xl relative overflow-hidden group">
                {/* Gradient blob behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/10 via-transparent to-[var(--color-neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border border-[var(--color-neon-blue)]/5 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-44 h-44 rounded-full border border-[var(--color-neon-purple)]/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                </div>

                <span
                  className="text-[6rem] sm:text-[7rem] font-black gradient-text leading-none select-none block text-center relative z-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  D
                </span>
              </div>
              {/* Decorative floating dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--color-neon-blue)]/20 animate-float" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[var(--color-neon-purple)]/15 animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-[var(--color-neon-cyan)]/25 animate-float" style={{ animationDelay: '4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
