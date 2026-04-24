import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects, GithubIcon } from '../data.jsx';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-neon-cyan), transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="reveal">
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work — from security tools to creative platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="glass project-card p-7 sm:p-8 rounded-2xl flex flex-col group relative overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Color accent bar */}
                <div
                  className="h-0.5 w-10 rounded-full mb-6 transition-all duration-500 group-hover:w-full"
                  style={{ background: project.color }}
                />

                {/* Project number */}
                <div
                  className="text-[0.65rem] font-mono uppercase tracking-widest mb-2"
                  style={{ color: `${project.color}99` }}
                >
                  Project {String(i + 1).padStart(2, '0')}
                </div>

                <h3
                  className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 pt-4 border-t border-white/5">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-white/40 hover:text-[var(--color-neon-blue)] transition-colors uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-white/40 hover:text-white transition-colors uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={13} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
