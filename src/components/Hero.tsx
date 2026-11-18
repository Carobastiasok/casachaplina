import React from 'react';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Video / Ambient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Video de fondo optimizado para Desktop y Mobile */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/poster-saladeensayo4.jpg"
          /* 
            scale-[1.25] en mobile para recortar el cartel
            lg:scale-105 en escritorio para no perder nitidez
            object-top alinea el video arriba para esconder la parte inferior
          */
          className="w-full h-full object-cover object-top scale-[1.25] lg:scale-105 opacity-60 transition-transform duration-1000"
        >
          <source src="/assets/saladeensayo4.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic dark scrims to ensure pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,black_85%)]" />
      </div>

      {/* Decorative Brand Accent Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#075BEA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#F21D25]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#FFD400]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/15 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
          <span className="tracking-wider uppercase">VILLA ORTÚZAR · CABA</span>
        </div>

        {/* Main Display Headline in Lovelo */}
        <h1 className="font-lovelo text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-white leading-tight font-black uppercase drop-shadow-2xl">
          CASA <br className="sm:hidden" />
          CHAPLINA
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
          Entrenamiento actoral, talleres y mi estudio artístico en Villa Ortúzar
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary WhatsApp Button */}
          <a
            href="https://wa.me/5491130509043"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-2.5 pr-6 py-2.5 rounded-full font-semibold text-sm text-zinc-950 bg-white hover:bg-zinc-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-[0_12px_32px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25D366] to-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-[0_3px_12px_rgba(37,211,102,0.4)]">
              <WhatsAppIcon className="w-4 h-4" />
            </span>
            <span className="tracking-wide whitespace-nowrap">ESCRIBIME POR WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
          </a>

          {/* Secondary Explore Button */}
          <a
            href="#espacio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-zinc-200 bg-white/10 hover:bg-white/15 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-zinc-300" />
            <span className="tracking-wide">CONOCÉ MI ESPACIO</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
            DESPLAZÁ PARA EXPLORAR
          </span>
          <div className="w-4 h-8 rounded-full border border-white/30 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};