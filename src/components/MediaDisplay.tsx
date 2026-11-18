import React from 'react';
import { Maximize2 } from 'lucide-react';

interface MediaDisplayProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  category?: string;
  aspectRatio?: string;
  showOverlay?: boolean;
  onOpen: () => void;
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  src,
  alt,
  title,
  subtitle,
  category,
  aspectRatio = '4/3',
  showOverlay = true,
  onOpen,
}) => {
  const isVideo = src.endsWith('.mp4');
  const hasSource = src !== '';

  const getPaddingBottom = () => {
    switch (aspectRatio) {
      case '16/9':
        return '56.25%';
      case '1/1':
        return '100%';
      case '3/4':
        return '133.33%';
      case 'cinestill':
        return '125%';
      case '4/3':
      default:
        return '75%';
    }
  };

  return (
    <div
      className={`w-full relative group overflow-hidden rounded-xl bg-zinc-950 border border-white/10 ${
        hasSource ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={hasSource ? onOpen : undefined}
    >
      <div
        className="w-full relative"
        style={{ paddingBottom: getPaddingBottom() }}
      >
        {hasSource ? (
          isVideo ? (
            <video
              src={src}
              poster={src.replace('/assets/', '/assets/poster-').replace('.mp4', '.jpg')}
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              playsInline
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => e.currentTarget.pause()}
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-dashed border-white/10 text-zinc-500 p-4">
            <span className="text-xs font-mono text-center uppercase tracking-wider text-zinc-400">
              {title} <br />
              <span className="text-[10px] text-zinc-600">(Próximamente)</span>
            </span>
          </div>
        )}
      </div>

      {hasSource && showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          {/* Categoría en AMARILLO */}
          {category && (
            <span className="text-xs font-mono tracking-widest text-[#FFD400] font-bold uppercase mb-1">
              {category}
            </span>
          )}

          {/* Título en BLANCO */}
          {title && (
            <h3 className="text-white font-lovelo text-lg font-bold tracking-wider uppercase mb-1">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-zinc-300 text-xs mb-3 line-clamp-2">{subtitle}</p>
          )}

          {/* Acción final "VER EN ALTA RESOLUCIÓN" */}
          <div className="flex items-center gap-2 text-xs font-medium text-white/90 group-hover:text-white transition-colors mt-2">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
            <span>Ver en alta resolución</span>
          </div>
        </div>
      )}
    </div>
  );
};