import { useScrollReveal } from '../hooks/useScrollReveal';
import { services, iconMap } from '../data.jsx';

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Services
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            What I can do for you — from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="glass p-5 sm:p-6 rounded-xl text-center group project-card relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                  style={{ background: service.color }}
                />

                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {Icon && (
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}10`, border: `1px solid ${service.color}18` }}
                    >
                      <Icon size={20} style={{ color: service.color }} />
                    </div>
                  )}
                  <h3
                    className="text-xs sm:text-sm font-bold text-white mb-2 group-hover:text-[var(--color-neon-blue)] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[0.7rem] sm:text-xs text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
