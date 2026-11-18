import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MediaItem } from '../types';

interface ProduccionesSectionProps {
  onSelectMedia: (items: MediaItem[], index: number) => void;
}

export const ProduccionesSection: React.FC<ProduccionesSectionProps> = ({ onSelectMedia }) => {
  const shootingItems: MediaItem[] = [
    {
      id: 'shoot-1',
      src: '/assets/shooting1.jpg',
      alt: 'Dani Rodríguez frente al altar con velas, rosario y drapeado rojo en el rodaje de Gata Mala',
      cardLabel: 'ALTAR & VELAS',
      title: 'Gata Mala — Altar & Velas',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
    {
      id: 'shoot-2',
      src: '/assets/shooting2.jpg',
      alt: 'Retrato frontal de Dani Rodríguez rezando bajo cruces y drapeado rojo en Casa Chaplina',
      cardLabel: 'RETRATO EN EL ALTAR',
      title: 'Gata Mala — Retrato Frontal en Set',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
    {
      id: 'shoot-3',
      src: '/assets/shooting3.jpg',
      alt: 'Plano medio de Dani Rodríguez con rosario junto a la puerta de época y luz cálida',
      cardLabel: 'LUZ ANALÓGICA',
      title: 'Gata Mala — Escena en Rollo 35mm',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
    {
      id: 'shoot-4',
      src: '/assets/shooting4.jpg',
      alt: 'Escenografía completa del altar montado sobre pared descascarada en Casa Chaplina',
      cardLabel: 'DIRECCIÓN DE ARTE',
      title: 'Gata Mala — Escenografía del Set',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
    {
      id: 'shoot-5',
      src: '/assets/shooting5.jpg',
      alt: 'Plano entero de Dani Rodríguez en el salón principal frente al ventanal de época',
      cardLabel: 'SALÓN PRINCIPAL',
      title: 'Gata Mala — Plano Entero en Salón',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
    {
      id: 'shoot-6',
      src: '/assets/shooting6.jpg',
      alt: 'Escena grupal en silla plástica roja con gafas de sol Y2K, abanico y trenzas',
      cardLabel: 'ESTÉTICA Y2K EN SET',
      title: 'Gata Mala — Escena Grupal Interior',
      subtitle: '',
      category: 'Gata Mala · Backstage',
    },
    {
      id: 'shoot-7',
      src: '/assets/shooting7.jpg',
      alt: 'Retrato en el jardín de Casa Chaplina en silla roja con vestido blanco y camisetas colgadas',
      cardLabel: 'JARDÍN & TROPICAL',
      title: 'Gata Mala — Retrato en el Jardín',
      subtitle: '',
      category: 'Gata Mala · Backstage',
    },
    {
      id: 'shoot-8',
      src: '/assets/shooting8.jpg',
      alt: 'Elenco completo posando en el jardín de Casa Chaplina bajo prendas colgadas',
      cardLabel: 'ELENCO AL AIRE LIBRE',
      title: 'Gata Mala — Elenco en el Patio',
      subtitle: '',
      category: 'Gata Mala · CineStill 400D',
    },
  ];

  return (
    <section id="producciones" className="py-20 md:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 04 / PRODUCCIONES */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
            04 / PRODUCCIONES
          </span>
          <h2 className="font-lovelo text-3xl sm:text-5xl md:text-6xl text-white tracking-wider font-extrabold uppercase">
            LOCACIÓN PARA PRODUCCIONES
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Abro las puertas de mi casona para marcas, diseñadores, fotógrafos y productoras audiovisuales. Un set con personalidad estética propia, aberturas de época, excelente entrada de luz natural y versatilidad de encuadres en Villa Ortúzar.
          </p>
        </div>

        {/* Featured Production Context Strip */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#FFD400] uppercase block mb-1">
              RODAJE EN CASA CHAPLINA · OCTUBRE 2025
            </span>
            <h3 className="font-lovelo text-lg sm:text-xl text-white tracking-wider uppercase">
              VIDEOCLIP &ldquo;GATA MALA&rdquo; — DANI RODRÍGUEZ &amp; MARI LA CARAJITA
            </h3>
          </div>
          <div className="text-[11px] font-mono text-zinc-400 md:text-right shrink-0 space-y-0.5 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5">
            <p>
              <span className="text-zinc-200">Dir. creativa:</span> Ramses Prada &amp; Daniela Rodríguez
            </p>
            <p>
              <span className="text-zinc-200">Foto &amp; film:</span> Rafael Cortissoz · <span className="text-zinc-200">Prod.:</span> Ephra
            </p>
          </div>
        </div>

        {/* 35mm Film Strip Gallery (Unobstructed frames + numbering & yellow label below) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {shootingItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectMedia(shootingItems, index)}
              className="group flex flex-col rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-1.5 w-full border-t border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-[#FFD400] uppercase block leading-snug">
                  {String(index + 1).padStart(2, '0')} / {item.cardLabel}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                  Ampliar fotografía →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase block">ILUMINACIÓN</span>
            <p className="text-sm font-semibold text-white mt-1">Luz Natural y Set Oscurecible</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase block">ESPACIOS</span>
            <p className="text-sm font-semibold text-white mt-1">Interior de Época + Jardín</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase block">PRODUCCIÓN</span>
            <p className="text-sm font-semibold text-white mt-1">Camarín, Cocina y Área de Descanso</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase block">UBICACIÓN</span>
            <p className="text-sm font-semibold text-white mt-1">Pasaje Ohm · Villa Ortúzar</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5491130509043"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 pl-2.5 pr-6 py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-zinc-950/90 hover:bg-zinc-900 border border-white/15 hover:border-[#25D366]/60 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(37,211,102,0.35)]">
              <WhatsAppIcon className="w-4 h-4" />
            </span>
            <span className="font-lovelo tracking-wider">ESCRIBIME PARA RESERVAR EL SET</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};