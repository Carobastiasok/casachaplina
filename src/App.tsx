/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EspacioSection } from './components/EspacioSection';
import { MartinaSection } from './components/MartinaSection';
import { OfertaSection } from './components/OfertaSection';
import { ProduccionesSection } from './components/ProduccionesSection';
import { TestimoniosSection } from './components/TestimoniosSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { MediaItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('espacio');

  // Lightbox Modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<MediaItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (items: MediaItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
  };

  // Scroll spy to update active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['espacio', 'martina', 'oferta', 'producciones', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#075BEA] selection:text-white">
      {/* Fixed Header & Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Semantic Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* 01. El Espacio / Instalaciones */}
        <EspacioSection onSelectMedia={handleOpenLightbox} />

        {/* 02. Martina Alonso (Biografía & Portfolio Audiovisual) */}
        <MartinaSection onSelectMedia={handleOpenLightbox} />

        {/* 03. Oferta Artística (Taller de Teatro para Adultos) */}
        <OfertaSection onSelectMedia={handleOpenLightbox} />

        {/* 04. Locación para Producciones (Shooting 35mm) */}
        <ProduccionesSection onSelectMedia={handleOpenLightbox} />

        {/* 05. Testimonios & Comunidad */}
        <TestimoniosSection />

        {/* 06. Contacto & Reservas */}
        <ContactoSection />
      </main>

      {/* Footer with Instagram Links */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Lightbox Modal for High-Res Inspection */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </div>
  );
}
