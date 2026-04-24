import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data.jsx';
import { useActiveSection } from '../hooks/useScrollReveal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (id) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? 'py-2.5 glass-strong shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('hero'); }}
          className="flex items-center gap-2 group"
        >
          <span
            className="text-2xl sm:text-3xl font-black gradient-text group-hover:scale-110 transition-transform duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            D
          </span>
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase hidden sm:block">
            Portfolio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(link.id); }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[var(--color-dark-900)]/98 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center gap-5"
          style={{ animation: 'fade-in-up 0.3s ease' }}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Mobile logo */}
          <span
            className="text-4xl font-black gradient-text mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            D
          </span>

          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(link.id); }}
              className="text-xl font-semibold text-white/60 hover:text-[var(--color-neon-blue)] transition-all duration-300 tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-heading)',
                animationDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
