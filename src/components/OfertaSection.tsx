import React, { useState } from 'react';
import { Clock, BookOpen, Wine, Sparkles, Flame, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MediaItem } from '../types';

interface OfertaSectionProps {
  onSelectMedia: (items: MediaItem[], index: number) => void;
}

export const OfertaSection: React.FC<OfertaSectionProps> = ({ onSelectMedia }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const talleresImages: MediaItem[] = [
    {
      id: 'talleres-grupal',
      src: '/assets/talleresgrupal.jpg',
      alt: 'Grupo participante en taller a demanda en Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Encuentro grupal y trabajo escénico en Casa Chaplina',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-0',
      src: '/assets/talleres.jpg',
      alt: 'Jornada de taller artístico en Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Workshops intensivos y seminarios creativos',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-1',
      src: '/assets/talleres1.jpg',
      alt: 'Entrenamiento escénico y corporal en taller',
      title: 'Talleres a Demanda',
      subtitle: 'Expresión corporal y entrenamiento actoral',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-2',
      src: '/assets/talleres2.jpg',
      alt: 'Dinámica grupal de taller en Villa Ortúzar',
      title: 'Talleres a Demanda',
      subtitle: 'Dinámicas de integración y juego escénico',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-3',
      src: '/assets/talleres3.jpg',
      alt: 'Práctica de voz y movimiento en Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Laboratorio de voz y presencia escénica',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-4',
      src: '/assets/talleres4.jpg',
      alt: 'Seminario especial en la casona de Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Seminarios breves diseñados a medida',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-5',
      src: '/assets/talleres5.jpg',
      alt: 'Trabajo creativo en equipo durante taller',
      title: 'Talleres a Demanda',
      subtitle: 'Creación colectiva para grupos y elencos',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-6',
      src: '/assets/talleres6.jpg',
      alt: 'Sesión práctica de taller teatral',
      title: 'Talleres a Demanda',
      subtitle: 'Desinhibición y comunicación escénica',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-7',
      src: '/assets/talleres7.jpg',
      alt: 'Cierre de jornada de taller en Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Propuestas artísticas personalizadas',
      category: 'Talleres a Demanda',
    },
    {
      id: 'talleres-espalda',
      src: '/assets/talleresespalda.jpg',
      alt: 'Vista de participantes trabajando en sala de Casa Chaplina',
      title: 'Talleres a Demanda',
      subtitle: 'Casa Chaplina · Villa Ortúzar',
      category: 'Talleres a Demanda',
    },
  ];

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + talleresImages.length) % talleresImages.length);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % talleresImages.length);
  };

  return (
    <section id="oferta" className="py-20 md:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
            03 / OFERTA ARTÍSTICA
          </span>
          <h2 className="font-lovelo text-3xl sm:text-5xl md:text-6xl text-white tracking-wider font-extrabold uppercase">
            OFERTA ARTÍSTICA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Propuestas de entrenamiento y encuentro con cupos limitados para acompañarte de cerca en cada proceso.
          </p>
        </div>

        {/* Featured Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Card: TALLER DE TEATRO PARA ADULTOS (STRICT COMPLIANCE) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-zinc-950 border-2 border-[#075BEA]/60 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(7,91,234,0.15)] group">
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#075BEA]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold font-lovelo bg-[#075BEA] text-white tracking-wider shadow-[0_0_15px_rgba(7,91,234,0.4)] shrink-0 whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 fill-white shrink-0" /> DESTACADO
                </span>
                <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-zinc-400 uppercase whitespace-nowrap">
                  CLASES ANUALES
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-lovelo text-2xl sm:text-3xl text-white tracking-wider font-bold mb-4">
                TALLER DE TEATRO PARA ADULTOS
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                Un espacio donde el juego es la prioridad y el teatro, mi excusa para volver a conectar sin prejuicios. En cada clase se trabaja la presencia, confiar en el grupo y explorar la creación escénica en libertad.
              </p>

              {/* Video Taller de Teatro para Adultos: talleradultos.mp4 */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black w-full">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-talleradultos.jpg"
                  src="/assets/talleradultos.mp4"
                  preload="metadata"
                  className="w-full max-h-[560px] object-contain bg-black"
                >
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              {/* Specific Schedules Required by User */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                  HORARIOS CONFIRMADOS 2026
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#075BEA]/20 flex items-center justify-center text-[#075BEA] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white uppercase font-lovelo tracking-wider">
                        LUNES
                      </p>
                      <p className="text-sm text-zinc-300 font-mono">
                        19:00 a 21:00 hs
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#075BEA]/20 flex items-center justify-center text-[#075BEA] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white uppercase font-lovelo tracking-wider">
                        MARTES
                      </p>
                      <p className="text-sm text-zinc-300 font-mono">
                        17:30 a 19:30 hs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/5">
                  ✓ Técnica Actoral
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/5">
                  ✓ Expresión Corporal
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/5">
                  ✓ Entrenamiento Vocal
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/5">
                  ✓ Sin Experiencia Previa
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5491130509043"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm text-white bg-[#075BEA] hover:bg-[#064ec7] hover:-translate-y-0.5 active:scale-[0.99] hover:shadow-[0_10px_28px_rgba(7,91,234,0.38)] transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span className="font-lovelo tracking-wider">INFO PARA SUMARME A LAS CLASES</span>
              <ArrowUpRight className="w-4 h-4 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 shrink-0" />
            </a>
          </div>

          {/* Secondary Card: CLUB DE LECTURA (Adult Cultural Encounters) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 relative overflow-hidden group">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold font-lovelo bg-[#FFD400] text-black tracking-wider shrink-0 whitespace-nowrap">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" /> LITERATURA
                </span>
                <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-zinc-400 uppercase whitespace-nowrap">
                  ENCUENTRO LITERARIO
                </span>
              </div>

              <h3 className="font-lovelo text-2xl sm:text-3xl text-white tracking-wider font-bold mb-4">
                CLUB DE LECTURA
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Un espacio distendido para dialogar, reflexionar y compartir impresiones sobre obras fundamentales de la literatura contemporánea y dramaturgia.
              </p>

              {/* Video container for Azara / Reading Club */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-[360px] relative">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-clubdelectura.jpg"
                  src="/assets/clubdelectura.mp4"
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 mb-6 text-xs text-zinc-300 space-y-1">
                <p className="font-semibold text-white">Leemos autores de teatro y narrativa contemporánea</p>
                <p className="text-zinc-400">Encuentros mensuales con merienda y debate en la casona.</p>
              </div>
            </div>

            <a
              href="https://wa.me/5491130509043"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm text-black bg-[#FFD400] hover:bg-[#e6bf00] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer font-lovelo tracking-wider"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>QUIERO SUMARME AL CLUB DE LECTURA</span>
              <ArrowUpRight className="w-4 h-4 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 shrink-0" />
            </a>
          </div>
        </div>

        {/* Secondary Row: CATA DE VINOS & TALLERES A DEMANDA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cata de Vinos */}
          <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold font-lovelo bg-[#F21D25] text-white tracking-wider shrink-0 whitespace-nowrap">
                  <Wine className="w-3.5 h-3.5 shrink-0" /> EXPERIENCIA
                </span>
                <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-normal text-zinc-400 uppercase whitespace-nowrap">
                  NOCHE DE VINO
                </span>
              </div>
              <h3 className="font-lovelo text-2xl text-white tracking-wider font-bold mb-2">
                CATA DE VINOS
              </h3>
              <p className="text-sm text-zinc-300 font-light mb-6">
                Experiencia sensorial donde el maridaje, las historias de bodega y la buena conversación convergen en una velada íntima en la casona.
              </p>

              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[4/5] md:aspect-auto md:flex-1 md:min-h-[360px] relative">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-chaplinaeventocata.jpg"
                  src="/assets/chaplinaeventocata.mp4"
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  Tu navegador no soporta video HTML5.
                </video>
              </div>
            </div>

            <a
              href="https://wa.me/5491130509043"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-zinc-900 border border-white/15 hover:border-[#F21D25] hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200 font-lovelo tracking-wider"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>QUIERO ENTERARME DE LA PRÓXIMA FECHA</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          </div>

          {/* Presentaciones Culturales */}
          <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold font-lovelo bg-white/10 text-white tracking-wider shrink-0 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD400] shrink-0" /> EXPERIENCIA
                </span>
                <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-normal text-zinc-400 uppercase whitespace-nowrap">
                  ESPACIO PARA EVENTOS
                </span>
              </div>
              <h3 className="font-lovelo text-2xl text-white tracking-wider font-bold mb-2">
                PRESENTACIONES CULTURALES
              </h3>
              <p className="text-sm text-zinc-300 font-light mb-6">
                El espacio también está disponible para tus propios proyectos culturales y artísticos: presentaciones de libros, muestras, lanzamientos de emprendimientos, ciclos íntimos y encuentros creativos.
              </p>

              {/* Carrusel de Talleres a Demanda */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative group/carousel">
                <img
                  src={talleresImages[currentSlide].src}
                  alt={talleresImages[currentSlide].alt}
                  onClick={() => onSelectMedia(talleresImages, currentSlide)}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover/carousel:scale-[1.02]"
                />

                {/* Gradient scrim */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                {/* Expand button */}
                <button
                  type="button"
                  onClick={() => onSelectMedia(talleresImages, currentSlide)}
                  aria-label="Ampliar foto del taller"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white hover:bg-black/85 flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Foto siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white hover:bg-black/85 flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom counter & slide indicators */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono tabular-nums text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10">
                    {currentSlide + 1} / {talleresImages.length}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {talleresImages.map((img, idx) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        aria-label={`Ver foto ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          idx === currentSlide
                            ? 'w-5 bg-[#FFD400]'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="text-[#FFD400] font-bold">●</span> Presentaciones de Libros &amp; Ciclos Literarios
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="text-[#075BEA] font-bold">●</span> Proyectos Culturales, Muestras &amp; Acústicos
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="text-[#F21D25] font-bold">●</span> Lanzamientos &amp; Eventos de Emprendimientos
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5491130509043"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-zinc-900 border border-white/15 hover:border-white/40 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200 font-lovelo tracking-wider text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>ALQUILÁ EL ESPACIO PARA TU PRESENTACIÓN</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};