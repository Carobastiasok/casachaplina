import React from 'react';
import { Instagram, Film, Sparkles, Tv, Clapperboard, Maximize2 } from 'lucide-react';
import { MediaDisplay } from './MediaDisplay';
import { MediaItem } from '../types';

interface MartinaSectionProps {
  onSelectMedia: (items: MediaItem[], index: number) => void;
}

export const MartinaSection: React.FC<MartinaSectionProps> = ({ onSelectMedia }) => {
  // Exact portraits marti1.jpg to marti7.jpg
  const portraits: MediaItem[] = [
    {
      id: 'marti-1',
      src: '/assets/marti1.jpg',
      alt: 'Retrato de Martina Alonso en blanco y negro',
      title: 'Martina Alonso',
      subtitle: 'Actriz, bailarina, cantante y directora de Casa Chaplina',
      category: 'Retrato Principal',
    },
    {
      id: 'marti-2',
      src: '/assets/marti2.jpg',
      alt: 'Martina Alonso en escena teatral en sillón vintage con tapado rojo',
      title: 'El Funeral de los Objetos',
      subtitle: 'Teatro musical en gira nacional (Metropolitan / Paseo La Plaza)',
      category: 'Teatro',
    },
    {
      id: 'marti-3',
      src: '/assets/marti3.jpg',
      alt: 'Martina Alonso en exteriores con boina y saco animal print',
      title: 'Dirección & Creación Escénica',
      subtitle: 'Microteatro Buenos Aires y nuevos lenguajes escénicos',
      category: 'Fotografía',
    },
    {
      id: 'marti-4',
      src: '/assets/marti4.jpg',
      alt: 'Retrato de estudio de Martina Alonso en pose reflexiva',
      title: 'Retrato de Estudio',
      subtitle: 'Fotografía de estudio y casting',
      category: 'Retrato',
    },
    {
      id: 'marti-5',
      src: '/assets/marti5.jpg',
      alt: 'Martina Alonso en el escenario del teatro iluminada por un cenital',
      title: 'En el Escenario',
      subtitle: 'Séptima temporada de El Funeral de los Objetos',
      category: 'Teatro',
    },
    {
      id: 'marti-6',
      src: '/assets/marti6.jpg',
      alt: 'Primer plano natural de Martina Alonso',
      title: 'PRIMER PLANO NATURAL',
      subtitle: '',
      category: 'Retrato',
    },
    {
      id: 'marti-7',
      src: '/assets/marti7.jpg',
      alt: 'Martina Alonso en retrato de estudio mostrando versatilidad actoral',
      title: 'VERSATILIDAD ACTORAL',
      subtitle: 'Registro expresivo y composición entre el drama, la comedia y el musical',
      category: 'Retrato',
    },
  ];

  // Featured theatre musical: "El Funeral de los Objetos"
  const funeralImages: MediaItem[] = [
    {
      id: 'funeral-1',
      src: '/assets/elfuneral.jpg',
      alt: 'Elenco de El Funeral de los Objetos sobre el escenario con sus objetos personales',
      title: 'El Funeral de los Objetos',
      subtitle: 'Comedia Dramática Musical · 7 temporadas consecutivas',
      description:
        'Elenco protagónico en escena. Dramaturgia y dirección de Nicolás Manasseri y María Fernanda Provenzano.',
      category: 'Teatro Musical',
    },
    {
      id: 'funeral-2',
      src: '/assets/elfuneral1.jpg',
      alt: 'Martina Alonso en función de El Funeral de los Objetos',
      title: 'El Funeral de los Objetos — En Escena',
      subtitle: 'Teatro Metropolitan, Paseo La Plaza y giras nacionales',
      description:
        'Ritual terapéutico colectivo con humor absurdo y canciones originales en cartelera desde 2021.',
      category: 'Teatro Musical',
    },
  ];

  // Television and Cinema stills — "La Iglesia Oculta" (History Channel)
  const iglesiaStills: MediaItem[] = [
    {
      id: 'iglesia-1',
      src: '/assets/laiglesiaoculta.jpeg',
      alt: 'Fotograma de La Iglesia Oculta dirigida por Jesús Braceras para History Channel',
      cardLabel: 'RECREACIÓN HISTÓRICA',
      title: 'La Iglesia Oculta — Recreación Histórica',
      subtitle: '',
      category: 'History Channel',
    },
    {
      id: 'iglesia-2',
      src: '/assets/laiglesiaoculta-2.jpeg',
      alt: 'Primer plano de personaje en La Iglesia Oculta en Jujuy',
      cardLabel: 'PRIMER PLANO / PERSONAJE',
      title: 'La Iglesia Oculta — Primer Plano / Personaje',
      subtitle: '',
      category: 'History Channel',
    },
    {
      id: 'iglesia-3',
      src: '/assets/laiglesiaoculta-3.jpeg',
      alt: 'Fotograma de rodaje de época en Tilcara y Yala para La Iglesia Oculta',
      cardLabel: 'RODAJE DE ÉPOCA',
      title: 'La Iglesia Oculta — Rodaje de Época',
      subtitle: '',
      category: 'History Channel',
    },
    {
      id: 'iglesia-4',
      src: '/assets/laiglesiaoculta-4.jpeg',
      alt: 'Puesta en escena de La Iglesia Oculta dirigida por Jesús Braceras',
      cardLabel: 'PUESTA EN ESCENA',
      title: 'La Iglesia Oculta — Puesta en Escena',
      subtitle: '',
      category: 'History Channel',
    },
  ];

  return (
    <section id="martina" className="py-20 md:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Bio & Master Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
              02 / MARTINA ALONSO
            </span>
            <h2 className="font-lovelo text-4xl sm:text-5xl md:text-6xl text-white tracking-wider font-extrabold uppercase">
              MARTINA <br />
              ALONSO
            </h2>

            {/* Bio en primera persona: marca personal de Martina Alonso */}
            <div className="mt-6 text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Soy actriz, bailarina y cantante. A lo largo de mi recorrido transité el teatro, el cine y la televisión: participé en los largometrajes “Corazón Loco” y “Granizo”, ambos dirigidos por Marcos Carnevale. En televisión formé parte de la tira diaria de Pol-ka “1-5/18: Somos Uno”, interpretando a Sasha, y de “La Iglesia Oculta”, dirigida por Jesús Braceras para History Channel. En teatro recorrí distintos escenarios y lenguajes, tanto como actriz como directora, con experiencias en Microteatro Buenos Aires en obras como “¡De Pronto Flash!”, “Los Ricos No Tocan la Puerta”, “Santo Pecado”, “El Remate de Morón” y “Como Novie de Pueblo”. Actualmente transito la séptima temporada de “El Funeral de los Objetos”, obra de teatro musical con la que recorrimos escenarios de Gran Buenos Aires, Rosario y Mar del Plata, incluyendo funciones en el Teatro Metropolitan y el Paseo La Plaza.
              </p>
              <p>
                Fundé Casa Chaplina como un espacio para integrar la técnica actoral con el trabajo corporal y vocal. Desde mi estudio acompaño a cada alumno a descubrir su propia voz narrativa en un marco de contención, libertad y rigor estético.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/alonsomartina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-[#FFD400] bg-zinc-950 border border-white/15 hover:border-[#FFD400]/50 hover:bg-zinc-900 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@ALONSOMARTINA</span>
              </a>
              <a
                href="https://instagram.com/casachaplina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-[#FFD400] bg-zinc-950 border border-white/15 hover:border-[#FFD400]/50 hover:bg-zinc-900 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@CASACHAPLINA</span>
              </a>
            </div>
          </div>

          {/* Master Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
              <MediaDisplay
                src="/assets/marti1.jpg"
                alt="Martina Alonso - Actriz y Directora de Casa Chaplina"
                title="Martina Alonso"
                subtitle="Creadora, Directora & Docente de Casa Chaplina"
                category="Dirección Artística"
                aspectRatio="3/4"
                showOverlay={false}
                onOpen={() => onSelectMedia(portraits, 0)}
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                <h3 className="font-lovelo text-xl text-white tracking-wider">
                  Martina Alonso
                </h3>
                <p className="text-xs text-zinc-300 font-mono tracking-wide mt-1">
                  Creadora, Directora &amp; Docente de Casa Chaplina
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Block: EL FUNERAL DE LOS OBJETOS */}
        <div className="mb-16">
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#FFD400]" />
              <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase">
                TEATRO MUSICAL DESTACADO
              </span>
            </div>
            <h3 className="font-lovelo text-2xl sm:text-3xl md:text-4xl text-white tracking-wider font-extrabold uppercase">
              EL FUNERAL DE LOS OBJETOS
            </h3>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Galería de 2 imágenes de la obra */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {funeralImages.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectMedia(funeralImages, idx)}
                    className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300 bg-black cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Columna de Información y Sinopsis */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white">
                    Comedia Dramática Musical
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/20">
                    En Cartelera desde 2021
                  </span>
                </div>

                <p className="text-zinc-400 text-xs font-mono tracking-wide">
                  Dramaturgia &amp; Dirección: Nicolás Manasseri y María Fernanda Provenzano
                </p>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  Una comedia dramática musical que plantea un ritual terapéutico colectivo donde un grupo de desconocidos asiste a responder una convocatoria misteriosa, aferrados a objetos personales que condicionan su vida cotidiana para enfrentar sus miedos, duelos y frustraciones a través del humor absurdo y canciones originales.
                </p>

                <div className="p-4 rounded-2xl bg-zinc-900/70 border border-white/10">
                  <span className="text-[11px] font-mono tracking-widest text-[#FFD400] uppercase block mb-1">
                    MI ROL EN ESCENA
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    Integro el elenco protagónico de este fenómeno del teatro musical independiente y comercial en Argentina, con 7 temporadas consecutivas y funciones en el Teatro Metropolitan, Paseo La Plaza y giras nacionales (Mar del Plata, Rosario y GBA).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Strip: GALERÍA BIOGRÁFICA (marti1.jpg to marti7.jpg) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#FFD400]" />
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              GALERÍA BIOGRÁFICA &amp; ESCÉNICA
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {portraits.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onSelectMedia(portraits, idx)}
                className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/5] group cursor-pointer hover:border-[#FFD400] transition-all bg-zinc-950"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-[10px] text-white font-mono">
                  <span className="truncate">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audiovisual Reel & TV Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Film className="w-4 h-4 text-[#075BEA]" />
                <span className="text-xs font-mono tracking-widest text-[#075BEA] uppercase">
                  TRABAJOS AUDIOVISUALES &amp; TELEVISIÓN
                </span>
              </div>
              <h3 className="font-lovelo text-2xl sm:text-3xl text-white tracking-wider">
                PORTFOLIO AUDIOVISUAL
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Cine, Tiras de TV, Series y Publicidad
            </span>
          </div>

          {/* Videos Grid with <video controls> tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 1. Somos Uno (Pol-ka) */}
            <div className="flex flex-col rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden">
              <div className="p-3.5 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-[#F21D25]" />
                  <span className="text-xs font-bold text-white uppercase font-lovelo tracking-wider">
                    1-5/18: SOMOS UNO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Pol-ka / El Trece</span>
              </div>
              <div className="p-2 bg-black">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-somosuno.jpg"
                  src="/assets/somosuno.mp4"
                  preload="metadata"
                  className="w-full aspect-video rounded-xl bg-black object-cover"
                >
                  Tu navegador no soporta el video HTML5.
                </video>
              </div>
              <div className="p-4 text-xs text-zinc-300">
                <p className="font-semibold text-white">Personaje: Sasha</p>
                <p className="text-zinc-400 mt-1">
                  Participación en la tira diaria de horario central dirigida por Jorge Nisco y Alejandro Ibáñez.
                </p>
              </div>
            </div>

            {/* 2. RE/MAX */}
            <div className="flex flex-col rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden">
              <div className="p-3.5 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#075BEA]" />
                  <span className="text-xs font-bold text-white uppercase font-lovelo tracking-wider">
                    COMERCIAL RE/MAX
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Publicidad TV</span>
              </div>
              <div className="p-2 bg-black">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-publiremax.jpg"
                  src="/assets/publiremax.mp4"
                  preload="metadata"
                  className="w-full aspect-video rounded-xl bg-black object-cover"
                >
                  Tu navegador no soporta el video HTML5.
                </video>
              </div>
              <div className="p-4 text-xs text-zinc-300">
                <p className="font-semibold text-white">Actriz Protagónica</p>
                <p className="text-zinc-400 mt-1">
                  Campaña publicitaria nacional audiovisual para televisión abierta y plataformas digitales.
                </p>
              </div>
            </div>

            {/* 3. Mercado Play */}
            <div className="flex flex-col rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden">
              <div className="p-3.5 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-xs font-bold text-white uppercase font-lovelo tracking-wider">
                    MERCADO PLAY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Mercado Libre</span>
              </div>
              <div className="p-2 bg-black">
                <video
                  controls
                  playsInline
                  poster="/assets/poster-publimercadoplay.jpg"
                  src="/assets/publimercadoplay.mp4"
                  preload="metadata"
                  className="w-full aspect-video rounded-xl bg-black object-cover"
                >
                  Tu navegador no soporta el video HTML5.
                </video>
              </div>
              <div className="p-4 text-xs text-zinc-300">
                <p className="font-semibold text-white">Campaña "Adictivamente Gratis"</p>
                <p className="text-zinc-400 mt-1">
                  Spot publicitario y vía pública para el lanzamiento de series y películas de Mercado Libre.
                </p>
              </div>
            </div>
          </div>

          {/* Stills from "La Iglesia Oculta" */}
          <div className="mt-8">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block mb-3">
              SERIE: LA IGLESIA OCULTA · HISTORY CHANNEL (DIR. JESÚS BRACERAS)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {iglesiaStills.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectMedia(iglesiaStills, idx)}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/65 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-black/85 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="p-3.5 flex flex-col gap-1.5 w-full border-t border-white/10">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-semibold">
                      HISTORY CHANNEL
                    </span>
                    <div className="flex items-center justify-between gap-2 w-full">
                      <span className="font-lovelo text-xs tracking-wider text-white uppercase truncate">
                        {item.cardLabel || item.title}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FFD400] shrink-0 transition-colors">
                        Ampliar
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};