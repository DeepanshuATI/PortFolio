import { useState } from 'react';
import { X, Eye } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryItems } from '../data.jsx';

// Gradient backgrounds for gallery cards
const gradients = [
  'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  'linear-gradient(135deg, #0a0a2e, #00d4ff22, #a855f711)',
  'linear-gradient(135deg, #1a1a3e, #06ffd222, #f472b611)',
  'linear-gradient(135deg, #0d0d2b, #a855f722, #00d4ff11)',
  'linear-gradient(135deg, #12122e, #fbbf2422, #34d39911)',
  'linear-gradient(135deg, #0e0e2a, #f472b622, #a855f711)',
];

const categoryIcons = {
  'UI Design': '🎨',
  Poster: '📐',
  Thumbnail: '🖼️',
  Branding: '✦',
  Banner: '🏷️',
};

const accentColors = ['#00d4ff', '#a855f7', '#06ffd2', '#f472b6', '#fbbf24', '#34d399'];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Design Portfolio
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            UI screens, posters, thumbnails, and creative work.
          </p>
        </div>

        {/* Proper grid instead of CSS columns (avoids layout bugs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => {
            const heights = ['220px', '240px', '220px', '240px', '220px', '240px'];
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={item.id}
                className="glass rounded-xl overflow-hidden cursor-pointer group project-card"
                onClick={() => setLightbox(item)}
              >
                <div
                  className="w-full flex flex-col items-center justify-center relative overflow-hidden"
                  style={{
                    height: heights[i % heights.length],
                    background: gradients[i % gradients.length],
                  }}
                >
                  {/* Geometric pattern */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${accent} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${accent} 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }} />

                  {/* Category icon */}
                  <div className="text-3xl sm:text-4xl mb-2 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {categoryIcons[item.category] || '✦'}
                  </div>

                  {/* Title preview */}
                  <div
                    className="text-xs font-mono uppercase tracking-wider opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ color: accent }}
                  >
                    {item.category}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-white font-semibold text-sm">{item.title}</div>
                        <div className="text-white/50 text-xs">{item.category}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <Eye size={14} className="text-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-xl transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <div
              className="w-[85vw] max-w-2xl mx-auto rounded-xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{
                height: '60vh',
                background: gradients[galleryItems.indexOf(lightbox) % gradients.length],
              }}
            >
              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, ${accentColors[galleryItems.indexOf(lightbox) % accentColors.length]} 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }} />

              <div className="text-6xl mb-3 opacity-60">
                {categoryIcons[lightbox.category] || '✦'}
              </div>
              <div
                className="text-sm font-mono uppercase tracking-wider opacity-40"
                style={{ color: accentColors[galleryItems.indexOf(lightbox) % accentColors.length] }}
              >
                {lightbox.category}
              </div>
            </div>
            <div className="mt-4 text-white font-semibold">{lightbox.title}</div>
            <div className="text-white/40 text-sm">{lightbox.category}</div>
          </div>
        </div>
      )}
    </section>
  );
}
