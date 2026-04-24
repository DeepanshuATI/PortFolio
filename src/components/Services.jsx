import { useScrollReveal } from '../hooks/useScrollReveal';
import { services, iconMap } from '../data.jsx';

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            What I can do for you — from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="glass p-7 sm:p-8 rounded-2xl text-center group project-card relative overflow-hidden"
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
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}10`, border: `1px solid ${service.color}18` }}
                    >
                      <Icon size={22} style={{ color: service.color }} />
                    </div>
                  )}
                  <h3
                    className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4 group-hover:text-[var(--color-neon-blue)] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
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
