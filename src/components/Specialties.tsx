import React from 'react';
import { SPECIALTIES } from '../data';
import { LegalSpecialty } from '../types';
import * as Icons from 'lucide-react';

interface SpecialtiesProps {
  onSelectSpecialty: (specialty: LegalSpecialty) => void;
}

// Icon mapper helper
const getSpecialtyIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />;
  }
  return <Icons.Scale className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />;
};

export default function Specialties({ onSelectSpecialty }: SpecialtiesProps) {
  return (
    <section id="areas-juridicas" className="py-24 bg-white dark:bg-deep-gray relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-ice-white/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-deep dark:text-emerald-deep-light font-bold text-xs uppercase tracking-widest bg-emerald-deep-light/60 dark:bg-emerald-deep/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Áreas de Excelência
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nossas Especialidades Jurídicas
          </h2>
          <p className="text-slate-600 dark:text-ice-white/70 mt-4 leading-relaxed">
            Selecione a área correspondente à sua necessidade abaixo para ser direcionado diretamente ao advogado encarregado por este setor, garantindo assistência altamente qualificada.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-slate-50 dark:bg-warm-slate border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover-lift shadow-sm hover:shadow-xl dark:hover:shadow-emerald-deep/5 transition-all duration-300 relative group"
              id={`specialty-card-${specialty.id}`}
            >
              
              {/* Highlight subtle corner effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-deep/5 to-transparent rounded-tr-2xl group-hover:from-emerald-deep/15 transition-all" />

              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 bg-emerald-deep/10 dark:bg-emerald-deep-light/10 text-emerald-deep flex items-center justify-center rounded-xl mb-6 shadow-inner">
                  {getSpecialtyIcon(specialty.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {specialty.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-ice-white/70 leading-relaxed mb-6">
                  {specialty.shortDescription}
                </p>

                {/* Sub tags for quick reading on mobile */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {specialty.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-semibold px-2 py-1 bg-white dark:bg-slate-950 text-slate-500 dark:text-ice-white/50 border border-slate-200/50 dark:border-slate-850 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call-to-action button trigger */}
              <button
                onClick={() => onSelectSpecialty(specialty)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-950 text-emerald-deep dark:text-emerald-deep-light hover:bg-emerald-deep hover:text-white dark:hover:bg-emerald-deep-light dark:hover:text-deep-gray border border-emerald-deep/20 dark:border-emerald-deep-light/20 rounded-xl text-sm font-bold transition-all group-hover:border-emerald-deep cursor-pointer"
                id={`btn-talk-expert-${specialty.id}`}
              >
                <span>Falar com o Especialista</span>
                <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          ))}
        </div>

        {/* Micro copy under specialties */}
        <div className="text-center mt-12 bg-emerald-deep-light/30 dark:bg-emerald-deep/5 border border-emerald-deep/10 dark:border-emerald-deep-light/10 rounded-xl p-4 max-w-2xl mx-auto">
          <p className="text-xs text-slate-600 dark:text-ice-white/60">
            Não encontrou especificamente sua queixa empresarial ou familiar? <strong>Nossa equipe multidisciplinar oferece consultoria sob demanda</strong>. Faremos uma triagem imediata.
          </p>
        </div>

      </div>
    </section>
  );
}
