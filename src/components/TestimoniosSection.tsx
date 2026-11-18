import React from 'react';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

export interface TestimonioItem {
  id: string;
  nombre: string;
  cita: string;
  fotoUrl?: string;
}

export const testimoniosData: TestimonioItem[] = [
  {
    id: 'testimonio-1',
    nombre: 'Eugenia Fernandez',
    cita: 'Hermoso lugar y muy versátil. Fui tanto a tomar clases como a eventos culturales y siempre tiene una energía hermosa. Ademas, tiene una estetica muy particular para fotos o producciones. Recomiendo!',
  },
  {
    id: 'testimonio-2',
    nombre: 'Viviana Martín',
    cita: 'Es un lugar muy especial! Al ingresar aparecen recuerdos de mi infancia, del patio de mi abuela con sus hermosas plantas y no dan ganas de irse. Hay una energía que relaja. Participé de talleres, muestras de teatro y encuentro de emprendedores. Está escondido y eso lo hace más especial aún!',
  },
  {
    id: 'testimonio-3',
    nombre: 'Sol Rueda',
    cita: 'Increíble lugar para la cultura y el encuentro. Estamos armando clubes de lectura acá y no podría ser un espacio mejor. Hermoso, cálido y con una propuesta cultural que dan ganas de compartir y habitar',
  },
];

const getInitials = (nombre: string) =>
  nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

export const TestimoniosSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
            05 / TESTIMONIOS
          </span>
          <h2 className="font-lovelo text-3xl sm:text-5xl text-white tracking-wider font-extrabold uppercase leading-tight">
            GENTE QUE PASÓ POR CASA CHAPLINA
          </h2>
        </div>

        {/* Grilla responsiva de 3 testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimoniosData.map((item) => (
            <article
              key={item.id}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-white/20 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#FFD400]/70 mb-4" aria-hidden="true" />
                <p className="text-zinc-300 italic font-light text-sm sm:text-base leading-relaxed">
                  “{item.cita}”
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                {item.fotoUrl ? (
                  <img
                    src={item.fotoUrl}
                    alt={item.nombre}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-white/15 shrink-0"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-11 h-11 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-lovelo text-[#FFD400] shrink-0"
                  >
                    {getInitials(item.nombre)}
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {item.nombre}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-0.5 text-[#FFD400]" aria-label="5 estrellas">
                      <Star className="w-3 h-3 fill-[#FFD400]" aria-hidden="true" />
                      <Star className="w-3 h-3 fill-[#FFD400]" aria-hidden="true" />
                      <Star className="w-3 h-3 fill-[#FFD400]" aria-hidden="true" />
                      <Star className="w-3 h-3 fill-[#FFD400]" aria-hidden="true" />
                      <Star className="w-3 h-3 fill-[#FFD400]" aria-hidden="true" />
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px] leading-snug">
                      Reseña en Google
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enlace a reseñas reales en Google */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="https://share.google/xhHZlSM63bcC8e6kX"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-zinc-950 border border-white/15 hover:border-[#FFD400]/50 hover:bg-zinc-900/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="flex items-center gap-0.5 text-[#FFD400]" aria-hidden="true">
              <Star className="w-3.5 h-3.5 fill-[#FFD400]" />
              <Star className="w-3.5 h-3.5 fill-[#FFD400]" />
              <Star className="w-3.5 h-3.5 fill-[#FFD400]" />
              <Star className="w-3.5 h-3.5 fill-[#FFD400]" />
              <Star className="w-3.5 h-3.5 fill-[#FFD400]" />
            </span>
            <span className="font-lovelo text-xs sm:text-sm tracking-wider text-white uppercase">
              VER RESEÑAS REALES EN GOOGLE
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
