import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MediaItem } from '../types';

interface LightboxModalProps {
  items: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top action bar */}
      <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="font-lovelo text-white tracking-widest text-sm">
            CASA CHAPLINA
          </span>
          <span className="text-zinc-500 font-mono text-xs">·</span>
          <span className="text-zinc-400 text-xs font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491130509043"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/90 text-white border border-white/15 hover:border-[#25D366]/60 hover:bg-zinc-800 transition-all duration-200"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#25D366] to-[#16a34a] text-white flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-3 h-3" />
            </span>
            <span>Escribime por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#25D366] transition-colors" />
          </a>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
        {currentItem.type === 'video' ? (
          <div className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center">
            <video
              src={currentItem.src}
              poster={currentItem.src.replace('/assets/', '/assets/poster-').replace('.mp4', '.jpg')}
              controls
              autoPlay
              playsInline
              className="max-h-[75vh] w-auto rounded-xl border border-white/10 shadow-2xl bg-black"
            />
          </div>
        ) : (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        )}
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Anterior"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Siguiente"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-20">
        <div className="max-w-3xl">
          {currentItem.category && (
            <span className="text-[11px] font-mono tracking-widest text-[#FFD400] uppercase block">
              {currentItem.category}
            </span>
          )}
          <h3 className="font-lovelo text-base md:text-lg text-white tracking-wider mt-0.5">
            {currentItem.title}
          </h3>
          {currentItem.subtitle && (
            <p className="text-xs md:text-sm text-zinc-200 font-medium mt-0.5">
              {currentItem.subtitle}
            </p>
          )}
          {currentItem.description && (
            <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed mt-1.5">
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
