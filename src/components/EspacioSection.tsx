import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { MediaDisplay } from './MediaDisplay';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MediaItem } from '../types';

interface EspacioSectionProps {
  onSelectMedia: (items: MediaItem[], index: number) => void;
}

export const EspacioSection: React.FC<EspacioSectionProps> = ({ onSelectMedia }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'salas' | 'casona' | 'espacios'>('all');

  const galleryItems: MediaItem[] = [
   // --- SALAS DE ENSAYO (13 ITEMS) ---
    {
      id: 'ens-1',
      src: '/assets/espacio-6.jpeg',
      alt: 'Perspectiva de entrada',
      title: 'PERSPECTIVA DE ENTRADA',
      subtitle: 'Acceso directo desde el patio principal hacia la sala central.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-2',
      src: '/assets/espacio-7.jpeg',
      alt: 'Clima escénico',
      title: 'CLIMA ESCÉNICO',
      subtitle: 'Iluminación ambiental y climatización de color para ensayos.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-3',
      src: '/assets/espacio-9.jpeg',
      alt: 'Corazón de la casona',
      title: 'CORAZÓN DE LA CASONA',
      subtitle: 'El punto de encuentro donde conviven talleres, clases y creación.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-4',
      src: '/assets/espacio-10.jpeg',
      alt: 'Espacio de formación',
      title: 'ESPACIO DE FORMACIÓN',
      subtitle: 'Acondicionado para entrenamiento corporal, vocal y actuación.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-5',
      src: '/assets/espacio-11.jpeg',
      alt: 'Planta versátil',
      title: 'PLANTA VERSÁTIL',
      subtitle: 'Diáfana y flexible para improvisaciones, juegos y movimiento.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-6',
      src: '/assets/espacio-12.jpeg',
      alt: 'Conexión al jardín',
      title: 'CONEXIÓN AL JARDÍN',
      subtitle: 'Ventana exterior que aporta luz natural y ventilación al espacio.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-7',
      src: '/assets/saladeensayo1-1.jpg',
      alt: 'Set de rodaje',
      title: 'SET DE RODAJE',
      subtitle: 'Muros de textura única ideales para producciones audiovisuales.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-8',
      src: '/assets/saladeensayo2.jpg',
      alt: 'Doble acceso',
      title: 'DOBLE ACCESO',
      subtitle: 'Circulación fluida con dos entradas hacia el patio principal.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-9',
      src: '/assets/saladeensayo3.jpg',
      alt: 'Sala multifuncional',
      title: 'SALA MULTIFUNCIONAL',
      subtitle: 'Diseñada para albergar muestras anuales y puestas en escena.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-10',
      src: '/assets/saladeensayo5.jpg',
      alt: 'Luz y ventilación',
      title: 'LUZ Y VENTILACIÓN',
      subtitle: 'Entrada de aire cruzada y enmarcado con vista al jardín verde.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-11',
      src: '/assets/saladeensayo6.jpg',
      alt: 'Visión integrada',
      title: 'VISIÓN INTEGRADA',
      subtitle: 'Profundidad de campo y techos altos de casona patrimonial.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-12',
      src: '/assets/saladeensayo9.jpeg',
      alt: 'Área de ensayo',
      title: 'ÁREA DE ENSAYO',
      subtitle: 'Amplitud libre de obstáculos para la exploración escénica.',
      category: 'EL ESPACIO',
    },
    {
      id: 'ens-13',
      src: '/assets/saladeensayo10.jpeg',
      alt: 'Recorrido interior',
      title: 'RECORRIDO INTERIOR',
      subtitle: 'Conexión continua entre las distintas áreas y servicios de la casa.',
      category: 'EL ESPACIO',
    },

    // --- LA CASONA ---
    {
      id: 'casa-patio-encuentro',
      src: '/assets/patio2.jpg',
      alt: 'Patio de encuentro y creación en Casa Chaplina',
      title: 'PATIO DE ENCUENTRO',
      subtitle: '',
      category: 'LA CASONA',
    },
    {
      id: 'casa-1',
      src: '/assets/espacio-8.jpeg',
      alt: 'La Casona',
      title: 'JARDÍN',
      subtitle: '',
      category: 'LA CASONA',
    },
    {
      id: 'casa-2',
      src: '/assets/espacio.jpeg',
      alt: 'La Casona',
      title: 'PATIO',
      subtitle: '',
      category: 'LA CASONA',
    },
    {
      id: 'casa-3',
      src: '/assets/espacio-3.jpeg',
      alt: 'La Casona',
      title: 'BAÑO',
      subtitle: '',
      category: 'LA CASONA',
    },
    {
      id: 'casa-4',
      src: '/assets/lacasa1.jpeg',
      alt: 'La Casona',
      title: 'COCINA',
      subtitle: '',
      category: 'LA CASONA',
    },
    {
      id: 'casa-5',
      src: '/assets/lacasa4.jpeg',
      alt: 'La Casona',
      title: 'CAMARÍN',
      subtitle: '',
      category: 'LA CASONA',
    },

    // --- RINCONES & DETALLES ---
    {
      id: 'rincon-1',
      src: '/assets/espacio-4.jpeg',
      alt: 'Rincones y detalles',
      title: 'ABERTURAS Y TEXTURAS',
      subtitle: 'Luz natural y muros de época con impronta propia',
      category: 'RINCONES & DETALLES',
    },
    {
      id: 'rincon-2',
      src: '/assets/lacasa5.jpeg',
      alt: 'Rincones y detalles',
      title: 'RINCÓN DE REUNIÓN',
      subtitle: 'Espacio para rodajes en interior',
      category: 'RINCONES & DETALLES',
    },
    {
      id: 'rincon-3',
      src: '/assets/espacio-8.jpeg',
      alt: 'Rincones y detalles',
      title: 'JARDÍN EXTERIOR',
      subtitle: 'Espacio para rodajes exteriores, descansos y encuentros',
      category: 'RINCONES & DETALLES',
    },
    {
      id: 'rincon-4',
      src: '/assets/lacasa1.jpeg',
      alt: 'Rincones y detalles',
      title: 'ATMÓSFERA Y LUZ DE ESCENA',
      subtitle: 'Climatización de color intensa para puestas climáticas y rodajes',
      category: 'RINCONES & DETALLES',
    },
    {
      id: 'rincon-5',
      src: '/assets/baño2.jpg',
      alt: 'Baño intervenido en colores primarios',
      title: 'BAÑO',
      subtitle: 'Intervención en colores primarios y puerta vidriada',
      category: 'RINCONES & DETALLES',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'salas') return item.category === 'EL ESPACIO';
    if (activeFilter === 'casona') return item.category === 'LA CASONA';
    if (activeFilter === 'espacios') return item.category === 'RINCONES & DETALLES';
    return true;
  });

  return (
    <section id="espacio" className="py-20 md:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
            01 / EL ESPACIO
          </span>
          <h2 className="font-lovelo text-3xl sm:text-5xl md:text-6xl text-white tracking-wider font-extrabold uppercase">
            EL ESPACIO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-light mb-6">
            Casa Chaplina es mi casona artísticamente acondicionada en el corazón de Villa Ortúzar. La diseñé como un lugar versátil para inspirar, donde conviven la formación escénica, los encuentros culturales, la creación colectiva y las producciones audiovisuales.
          </p>

          <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-white/10 shrink-0 max-w-sm">
            <div className="w-10 h-10 rounded-xl bg-[#075BEA]/10 border border-[#075BEA]/20 flex items-center justify-center text-[#075BEA] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block">
                UBICACIÓN FÍSICA
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                Pasaje Ohm 2219, Villa Ortúzar, CABA
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-stretch sm:items-center gap-1.5 sm:gap-2 mb-8 p-1.5 bg-zinc-950 rounded-2xl border border-white/10 w-full sm:w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex items-center justify-center text-center min-h-[44px] sm:min-h-0 px-2.5 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-lovelo tracking-wide sm:tracking-wider leading-tight transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-black shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            TODAS LAS INSTALACIONES
          </button>
          <button
            onClick={() => setActiveFilter('salas')}
            className={`flex items-center justify-center text-center min-h-[44px] sm:min-h-0 px-2.5 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-lovelo tracking-wide sm:tracking-wider leading-tight transition-all cursor-pointer ${
              activeFilter === 'salas'
                ? 'bg-[#FFD400] text-black shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            SALAS DE ENSAYO
          </button>
          <button
            onClick={() => setActiveFilter('casona')}
            className={`flex items-center justify-center text-center min-h-[44px] sm:min-h-0 px-2.5 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-lovelo tracking-wide sm:tracking-wider leading-tight transition-all cursor-pointer ${
              activeFilter === 'casona'
                ? 'bg-[#FFD400] text-black shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            LA CASONA
          </button>
          <button
            onClick={() => setActiveFilter('espacios')}
            className={`flex items-center justify-center text-center min-h-[44px] sm:min-h-0 px-2.5 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-lovelo tracking-wide sm:tracking-wider leading-tight transition-all cursor-pointer ${
              activeFilter === 'espacios'
                ? 'bg-[#FFD400] text-black shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            RINCONES & DETALLES
          </button>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <MediaDisplay
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category}
              aspectRatio="4/3"
              onOpen={() => onSelectMedia(filteredItems, index)}
            />
          ))}
        </div>

        {/* CTA Bar below gallery */}
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
            <span className="tracking-wider">ESCRIBIME PARA VISITAR MI ESPACIO</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};