import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactoSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#F21D25]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Heart Icon Circle (matching screenshot #4) */}
        <div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/15 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(242,29,37,0.25)]">
          <Heart className="w-7 h-7 text-[#F21D25] fill-[#F21D25]/30 animate-pulse" />
        </div>

        {/* Section Label & Headline */}
        <span className="text-xs font-mono tracking-widest text-[#FFD400] font-semibold uppercase block mb-2">
          06 / CONTACTO
        </span>
        <h2 className="font-lovelo text-3xl sm:text-5xl md:text-6xl text-white tracking-widest font-black uppercase leading-tight max-w-3xl">
          CONSULTÁ DISPONIBILIDAD Y RESERVÁ TU LUGAR
        </h2>

        {/* Tarjetas interactivas de Ubicación y WhatsApp */}
        <div className="w-full max-w-3xl mx-auto mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 sm:gap-6">
            {/* Tarjeta de Ubicación - Google Maps */}
            <a
              href="https://share.google/XsFCCcRv1Tm8c2Sg0"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:flex-1 flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#075BEA]/50 hover:bg-zinc-900/70 transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075BEA]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#075BEA]/10 border border-[#075BEA]/20 flex items-center justify-center text-[#075BEA] shrink-0 group-hover:bg-[#075BEA]/20 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                  UBICACIÓN FÍSICA
                </span>
                <span className="text-sm font-medium text-white mt-0.5 sm:whitespace-nowrap">
                  Pasaje Ohm 2219, Villa Ortúzar, CABA
                </span>
                <span className="text-xs font-mono text-[#075BEA] group-hover:text-blue-400 mt-1 inline-flex items-center gap-1 transition-colors">
                  Abrir en Google Maps <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </a>

            {/* Tarjeta de WhatsApp Directo */}
            <a
              href="https://wa.me/5491130509043"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:flex-1 flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#25D366]/50 hover:bg-zinc-900/70 transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                  HABLEMOS DIRECTO
                </span>
                <span className="text-sm font-medium text-white mt-0.5 font-mono tabular-nums whitespace-nowrap">
                  +54 11 3050 9043
                </span>
                <span className="text-xs font-mono text-[#25D366] group-hover:text-emerald-400 mt-1 inline-flex items-center gap-1 transition-colors">
                  Escribime por WhatsApp <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
