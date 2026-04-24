import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills, iconMap } from '../data.jsx';

function SkillBar({ name, level, color, inView }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), 300);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-white/70">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{width}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal();
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    const el = document.getElementById('skills');
    if (el) observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-neon-purple), transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">My Skills</span>
          </h2>
          <p className="section-subtitle">
            Expertise spanning development, security, video production, and design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <div
                key={group.category}
                className="glass p-7 sm:p-8 rounded-2xl project-card group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {Icon && (
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${group.color}15` }}
                    >
                      <Icon size={20} style={{ color: group.color }} />
                    </div>
                  )}
                  <h3
                    className="text-base sm:text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                      inView={inView}
                    />
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
