import React from 'react';
import { OFFICE_CONTACT } from '../data';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Share2, ArrowUpRight, Compass } from 'lucide-react';

export default function Footer() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_CONTACT.address)}`;

  return (
    <footer id="localizacao" className="bg-deep-gray text-white pt-24 pb-12 border-t border-emerald-deep/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/5">
          
          {/* Brief and Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-deep text-white rounded-lg inline-block">
                  <Compass className="w-6 h-6 text-ice-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight text-white leading-none">APEX ADVOCACIA</h3>
                  <span className="text-[10px] tracking-[0.2em] text-emerald-deep-light/60 uppercase font-semibold">Banca de Elite</span>
                </div>
              </div>
              <p className="text-sm text-ice-white/70 leading-relaxed max-w-sm">
                Uma assessoria de elite focada na redução de conflitos societários, tributários e civis. Protegendo seu patrimônio em qualquer instância.
              </p>
            </div>

            {/* Direct contact channels cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-deep-light">Canais de Contato Direto</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${OFFICE_CONTACT.phone.replace(/\D/g, '')}`}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 hover:bg-emerald-deep/25 hover:border-emerald-deep/40 transition-all group"
                  id="footer-call-phone"
                >
                  <Phone className="w-4 h-4 text-emerald-deep-light group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-ice-white/40 leading-none">Telefone Corporativo</p>
                    <p className="text-sm font-bold text-white mt-1">{OFFICE_CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${OFFICE_CONTACT.email}`}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 hover:bg-emerald-deep/25 hover:border-emerald-deep/40 transition-all group"
                  id="footer-mailto-email"
                >
                  <Mail className="w-4 h-4 text-emerald-deep-light group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-ice-white/40 leading-none">E-mail Diretoria</p>
                    <p className="text-sm font-bold text-white mt-1">E-mail Corporativo</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Operational Clock info */}
            <div className="space-y-2 p-4 bg-white/5 border border-white/5 rounded-xl text-xs text-ice-white/60">
              <div className="flex items-center gap-2 text-emerald-deep-light font-bold">
                <Clock className="w-4 h-4" />
                <span>Horário de Atendimento Presencial:</span>
              </div>
              <p>{OFFICE_CONTACT.hours}</p>
              <p className="text-emerald-deep-light/40 font-semibold mt-1">Disponibilidade Emergencial Criminal e Tributária 24 Horas por dia.</p>
            </div>

          </div>

          {/* Interactive Map Block */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-emerald-deep-light" />
                <h4 className="text-sm font-bold tracking-tight">Sede Principal São Paulo</h4>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-xs text-emerald-deep-light hover:underline flex items-center gap-1 font-semibold"
                id="footer-open-gmaps"
              >
                <span>Como Chegar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated high performance Map visual */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[260px] bg-slate-900 group">
              
              {/* OpenStreetMap open source high performance view */}
              <iframe
                id="footer-location-embedded-iframe"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6890%2C-23.5862%2C-46.6778%2C-23.5794&amp;layer=mapnik&amp;marker=-23.5828%2C-46.6834"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Localização do Escritório Apex Advocacia"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              ></iframe>

              {/* Float address card over Map */}
              <div className="absolute bottom-4 left-4 right-4 bg-deep-gray/95 backdrop-blur-sm border border-emerald-deep/30 p-4 rounded-xl flex items-start gap-3 shadow-2xl">
                <div className="p-2 bg-emerald-deep text-white rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-ice-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white leading-tight">{OFFICE_CONTACT.city}</p>
                  <p className="text-[10px] sm:text-xs text-ice-white/70 leading-normal">{OFFICE_CONTACT.address}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ice-white/40">
          
          <div className="flex items-center gap-1.5 order-2 md:order-1 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-deep-light" />
            <span>
              &copy; {new Date().getFullYear()} APEX Advocacia de Elite. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-2">
            <a href="#inicio" className="hover:text-emerald-deep-light transition-colors">Termos de Uso</a>
            <a href="#inicio" className="hover:text-emerald-deep-light transition-colors">Política de Privacidade</a>
            <a href="#inicio" className="hover:text-emerald-deep-light transition-colors">Código de Ética OAB</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
