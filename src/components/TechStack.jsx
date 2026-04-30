import { useScrollReveal } from '../hooks/useScrollReveal';
import { techStack } from '../data.jsx';

const categoryColors = {
  Frontend: 'var(--color-neon-blue)',
  Backend: 'var(--color-neon-cyan)',
  Cybersecurity: 'var(--color-neon-purple)',
  'Design Tools': 'var(--color-neon-pink)',
};

export default function TechStack() {
  const ref = useScrollReveal();

  return (
    <section id="tech" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            The tools & technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {techStack.map((group) => {
            const catColor = categoryColors[group.category] || 'var(--color-neon-blue)';
            return (
              <div key={group.category} className="glass p-6 sm:p-7 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{ background: catColor }}
                  />
                  <h3
                    className="text-xs sm:text-sm font-bold text-white/50 uppercase tracking-[0.12em]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="tech-icon glass-strong p-4 sm:p-5 rounded-xl text-center cursor-default group"
                    >
                      <div className="text-xl sm:text-2xl mb-1.5 group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-[0.65rem] sm:text-xs text-white/50 font-medium group-hover:text-white transition-colors leading-tight">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
