import React, { useState, useEffect } from 'react';
import { STATISTICS } from '../data';
import { Shield, TrendingUp, Trophy, Award } from 'lucide-react';

// Lightweight count-up sub-component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    // Calculate steps and intervals based on target size
    const duration = 1500; // ms
    const increment = value / (duration / 16); // ~60fps
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCurrent(value);
      } else {
        setCurrent(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  // Formatting values for visual balance (e.g. integer or decimal)
  const isDecimal = value % 1 !== 0;
  const formatted = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('pt-BR');

  return (
    <span className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-emerald-deep dark:text-emerald-deep-light tracking-tight">
      {formatted}{suffix}
    </span>
  );
}

const getStatIcon = (id: string) => {
  switch (id) {
    case 'tax_sucesso':
      return <Trophy className="w-5 h-5 text-emerald-deep dark:text-emerald-deep-light" />;
    case 'casos_resolvidos':
      return <TrendingUp className="w-5 h-5 text-emerald-deep dark:text-emerald-deep-light" />;
    case 'milhoes_recuperados':
      return <Award className="w-5 h-5 text-emerald-deep dark:text-emerald-deep-light" />;
    default:
      return <Shield className="w-5 h-5 text-emerald-deep dark:text-emerald-deep-light" />;
  }
};

export default function Stats() {
  return (
    <section
      id="resultados-stats"
      className="py-20 bg-slate-50 dark:bg-warm-slate border-y border-slate-100 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro copy for stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-emerald-deep dark:text-emerald-deep-light uppercase tracking-wider bg-emerald-deep/10 dark:bg-emerald-deep/20 px-3 py-1 rounded-full inline-block mb-3">
              Impacto & Histórico
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Resultados comprovados que geram segurança jurídica real
            </h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-slate-600 dark:text-ice-white/70">
              Ao longo de nossa trajetória, priorizamos a mitigação de danos e a maximização dos resultados financeiros e civis dos nossos patrocinados. Abaixo estão os marcos que traduzem nosso compromisso com a integridade, transparência e justiça social.
            </p>
          </div>
        </div>

        {/* Counters list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              id={`stat-container-${stat.id}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-emerald-deep/10 dark:bg-emerald-deep-light/10 rounded-lg">
                  {getStatIcon(stat.id)}
                </div>
                <span className="text-xs font-bold text-slate-400 dark:text-ice-white/40 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>

              {/* Number Animation display */}
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-ice-white/60 leading-relaxed mt-2 p-0.5 border-t border-slate-50 dark:border-slate-800">
                {stat.subtitle}
              </p>

              {/* Decorative accent block */}
              <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-emerald-deep/80 dark:bg-emerald-deep-light/40" />
            </div>
          ))}
        </div>

        {/* Social Impact statement */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 p-6 sm:p-8 rounded-2xl">
          <div className="p-3 bg-emerald-deep/15 dark:bg-emerald-deep/20 text-emerald-deep dark:text-emerald-deep-light rounded-xl flex-shrink-0">
            <Shield className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Responsabilidade Social & Advocacia Pro Bono
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-ice-white/60">
              Acreditamos na função social da advocacia. Anualmente, destinamos 5% das horas de nossa banca para prestação jurídica humanitária gratuita a associações de caridade e indivíduos hipossuficientes, reafirmando nosso pacto de democratizar a cidadania.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
