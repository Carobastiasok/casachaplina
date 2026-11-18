import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href="https://wa.me/5491130509043"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribime por WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#16a34a] text-white flex items-center justify-center ring-1 ring-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_10px_28px_rgba(37,211,102,0.35)] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_14px_34px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </aside>
  );
};
