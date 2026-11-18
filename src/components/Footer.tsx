import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Izquierda: Copyright */}
          <p className="font-mono text-xs text-zinc-500">
            © 2026 CASA CHAPLINA · Todos los derechos reservados.
          </p>

          {/* Centro: Enlaces de Instagram */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://instagram.com/casachaplina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FFD400] hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>@casachaplina</span>
            </a>
            <a
              href="https://instagram.com/alonsomartina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FFD400] hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>@alonsomartina</span>
            </a>
          </div>

          {/* Derecha: Créditos de dirección & Volver arriba */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-zinc-500">
              Fundado por Martina Alonso · Villa Ortúzar, CABA
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="p-2 rounded-full bg-zinc-900 border border-white/10 hover:border-white/30 text-white transition-colors cursor-pointer shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Línea inferior: Firma de Diseño & Desarrollo */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-zinc-500">
            Diseño y desarrollo{' '}
            <a
              href="https://instagram.com/carobastias.ok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 font-semibold hover:text-[#FFD400] transition-colors"
            >
              @carobastias.ok
            </a>
            {' <3'}
          </p>
        </div>
      </div>
    </footer>
  );
};
