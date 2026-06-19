import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50 dark:bg-warm-slate border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-deep dark:text-emerald-deep-light uppercase tracking-widest bg-emerald-deep-light/60 dark:bg-emerald-deep/10 px-3 py-1.5 rounded-full inline-block mb-3">
            O que dizem de nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Depoimentos de Parceiros & Clientes
          </h2>
          <p className="text-slate-600 dark:text-ice-white/70 mt-4 leading-relaxed text-sm sm:text-base">
            Valorizamos a discrição, mas compartilhamos com a devida autorização alguns relatos que refletem a dedicação técnica estrutural da nossa banca de advocacia.
          </p>
        </div>

        {/* List of Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Quote design corner */}
              <div className="absolute top-6 right-6 text-emerald-deep/10 dark:text-emerald-deep-light/10">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              <div>
                {/* Rating component */}
                <div className="flex text-amber-500 gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-600 dark:text-ice-white/70 italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-900">
                <div className="w-10 h-10 bg-emerald-deep/10 dark:bg-emerald-deep-light/10 text-emerald-deep dark:text-emerald-deep-light font-bold text-sm rounded-full flex items-center justify-center">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-none">{testimonial.name}</h4>
                  <span className="text-[11px] text-slate-400 dark:text-ice-white/50">{testimonial.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Extra Security Assurance */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs text-slate-400 dark:text-ice-white/50 bg-white dark:bg-slate-950 px-4 py-3 border border-slate-100 dark:border-slate-900 rounded-xl max-w-xl mx-auto">
          <Shield className="w-4 h-4 text-emerald-deep" />
          <span>Garantia de Confidencialidade e Proteção de Segredo Processual Conforme Lei Federal.</span>
        </div>

      </div>
    </section>
  );
}
