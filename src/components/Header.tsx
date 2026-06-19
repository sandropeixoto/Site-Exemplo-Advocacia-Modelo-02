import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenConsultationModal: () => void;
}

export default function Header({ onOpenConsultationModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#areas-juridicas' },
    { label: 'Resultados', href: '#resultados-stats' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' }
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-gray/90 dark:bg-deep-gray/95 backdrop-blur-md shadow-lg border-b border-emerald-deep/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-2 group transition-all">
            <span className="p-2 bg-emerald-deep dark:bg-emerald-deep-light/10 text-white rounded-lg transition-transform group-hover:scale-105">
              <Shield className="w-6 h-6 text-ice-white" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-deep dark:text-white leading-none">
                APEX
              </span>
              <span className="text-[10px] tracking-[0.25em] text-emerald-deep/80 dark:text-emerald-deep-light/60 font-semibold uppercase">
                Advocacia de Elite
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-body dark:text-ice-white/90 hover:text-emerald-deep dark:hover:text-emerald-deep-light transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-deep dark:after:bg-emerald-deep-light after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions - Call Priorities */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:1140038822"
              id="cta-direct-phone-call"
              className="flex items-center gap-2 px-4 py-2 border border-emerald-deep/20 dark:border-emerald-deep/40 text-emerald-deep dark:text-emerald-deep-light hover:bg-emerald-deep hover:text-white dark:hover:bg-emerald-deep dark:hover:text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Ligar Agora</span>
            </a>
            <button
              onClick={onOpenConsultationModal}
              id="header-cta-schedule-button"
              className="px-4 py-2 bg-emerald-deep text-white hover:bg-emerald-deep-hover dark:bg-emerald-deep dark:hover:bg-emerald-deep/90 rounded-lg text-sm font-semibold shadow-md shadow-emerald-deep/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Consulta Urgente
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href="tel:1140038822"
              className="p-2 border border-emerald-deep/20 text-emerald-deep dark:text-emerald-deep-light rounded-lg hover:bg-emerald-deep/5 transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-body dark:text-ice-white hover:text-emerald-deep dark:hover:text-emerald-deep-light transition-colors focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-gray text-white border-b border-emerald-deep/20 shadow-2xl py-6 px-4 animate-fadeIn transition-all">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold py-2 border-b border-emerald-deep/5 hover:text-emerald-deep/80 transition-colors"
                id={`mobile-nav-${link.href.replace('#', '')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="tel:1140038822"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-deep/10 text-emerald-deep-light border border-emerald-deep-light/20 rounded-lg font-bold text-center"
            >
              <Phone className="w-4 h-4" />
              Ligar: (11) 4003-8822
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 bg-emerald-deep text-white rounded-lg font-bold shadow-md shadow-emerald-deep/20"
            >
              Iniciar Consulta On-line
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
