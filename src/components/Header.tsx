import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EL ESPACIO', href: '#espacio', id: 'espacio' },
    { label: 'MARTINA ALONSO', href: '#martina', id: 'martina' },
    { label: 'OFERTA ARTÍSTICA', href: '#oferta', id: 'oferta' },
    { label: 'PRODUCCIONES', href: '#producciones', id: 'producciones' },
    { label: 'TESTIMONIOS', href: '#testimonios', id: 'testimonios' },
    { label: 'CONTACTO', href: '#contacto', id: 'contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name con efecto HOVER JUGUETÓN */}
          <a
            href="#"
            className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075BEA] rounded-lg"
          >
            {/* Contenedor del Logo Animado */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center shrink-0 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-12 group-hover:border-[#FFD400] group-hover:shadow-[0_0_25px_rgba(255,212,0,0.6)]">
              <img
                src="/assets/logoig.jpg"
                alt="Casa Chaplina Logo"
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${!logoLoaded ? 'hidden' : 'block'}`}
                onError={() => setLogoLoaded(false)}
              />
            </div>

            {/* Letras Animadas y Texto Nuevo */}
            <div className="flex flex-col transition-transform duration-500 ease-out group-hover:translate-x-2">
              <span className="font-lovelo text-white text-base sm:text-lg lg:text-xl tracking-wider group-hover:text-[#FFD400] transition-colors duration-300">
                CASA CHAPLINA
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest text-zinc-400 font-mono">
                arte / encuentro / creación
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider font-lovelo transition-all duration-200 relative py-1 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#075BEA]'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#075BEA] rounded-full shadow-[0_0_8px_#075BEA]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-2xl flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-0.5">
                <img src="/assets/logoig.jpg" alt="Logo Casa Chaplina" className="w-full h-full object-cover rounded-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div>
                <span className="font-lovelo text-white text-base tracking-wider block">
                  CASA CHAPLINA
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  arte / encuentro / creación
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
              className="p-2 rounded-full bg-white/10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl text-zinc-200 hover:text-white hover:bg-white/5 font-lovelo text-sm tracking-widest border border-transparent hover:border-white/10 transition-all"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};