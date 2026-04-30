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
    <section id="tech" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Tech Stack
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            The tools & technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {techStack.map((group) => {
            const catColor = categoryColors[group.category] || 'var(--color-neon-blue)';
            return (
              <div key={group.category} className="glass p-5 sm:p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{ background: catColor }}
                  />
                  <h3
                    className="text-[0.65rem] sm:text-xs font-bold text-white/50 uppercase tracking-[0.12em]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="tech-icon glass-strong p-3 sm:p-4 rounded-lg text-center cursor-default group"
                    >
                      <div className="text-lg sm:text-xl mb-1 group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-[0.6rem] sm:text-[0.65rem] text-white/50 font-medium group-hover:text-white transition-colors leading-tight">
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
