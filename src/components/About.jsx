import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Zap, Globe } from 'lucide-react';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            A multi-disciplinary creator building at the intersection of code, security, and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — Animated D Card */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              <div className="glass-strong p-10 sm:p-12 rounded-2xl relative overflow-hidden group">
                {/* Gradient blob behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/10 via-transparent to-[var(--color-neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 rounded-full border border-[var(--color-neon-blue)]/5 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full border border-[var(--color-neon-purple)]/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                </div>

                <span
                  className="text-[8rem] sm:text-[10rem] font-black gradient-text leading-none select-none block text-center relative z-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  D
                </span>
              </div>
              {/* Decorative floating dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[var(--color-neon-blue)]/20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-[var(--color-neon-purple)]/15 animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-[var(--color-neon-cyan)]/25 animate-float" style={{ animationDelay: '4s' }} />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="reveal-right">
            <div className="space-y-4">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                I'm a <span className="text-white font-semibold">full-stack developer</span> and{' '}
                <span className="text-white font-semibold">creative technologist</span> passionate about building
                digital experiences that are both beautiful and secure. My work spans from crafting sleek user
                interfaces to hardening systems against cyber threats.
              </p>
              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                With a background in web development, cybersecurity, and visual storytelling, I bring a unique
                perspective to every project. I believe in the power of clean code, thoughtful design, and
                continuous learning. When I'm not building, I'm creating video content or exploring the latest
                in ethical hacking.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5 mt-10">
              {[
                { icon: Award, title: 'Multi-disciplinary', desc: 'Code, design & security', color: 'var(--color-neon-blue)' },
                { icon: Zap, title: 'Fast Learner', desc: 'Always exploring', color: 'var(--color-neon-purple)' },
                { icon: Globe, title: 'Remote Ready', desc: 'Work from anywhere', color: 'var(--color-neon-cyan)' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="glass p-4 sm:p-5 rounded-xl text-center group hover:border-[var(--color-neon-blue)]/30 transition-all duration-300"
                >
                  <Icon size={22} className="mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color }} />
                  <div className="text-white text-xs sm:text-sm font-semibold">{title}</div>
                  <div className="text-white/40 text-[0.65rem] sm:text-xs mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
