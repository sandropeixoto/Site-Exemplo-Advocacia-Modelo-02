import React, { useState } from 'react';
import { ShieldCheck, Users, Flame, Star, MessageSquare } from 'lucide-react';
import { ContactLead } from '../types';

interface HeroProps {
  onAddLead: (lead: Omit<ContactLead, 'id' | 'date' | 'status'>) => void;
}

export default function Hero({ onAddLead }: HeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: 'corporativo',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome completo é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp ou telefone é obrigatório.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Insira um telefone/WhatsApp válido com DDD.';
    }
    if (!formData.message.trim()) newErrors.message = 'Escreva um resumo do seu caso.';
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddLead(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        specialty: 'corporativo',
        message: ''
      });
    }, 4000);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-radial from-slate-50 to-ice-white dark:from-deep-gray dark:to-warm-slate overflow-hidden grid-bg"
    >
      {/* Visual background decor gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-deep/5 dark:bg-emerald-deep/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-80 h-80 bg-emerald-deep/5 dark:bg-emerald-deep-light/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Pitch Area */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-deep-light/80 dark:bg-emerald-deep/20 text-emerald-deep dark:text-emerald-deep-light rounded-full text-xs font-semibold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-emerald-deep dark:text-emerald-deep-light animate-pulse" />
              <span>Proteção Patrimonial & Defesa de Elite 24h</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Banca de advocacia focada em{' '}
              <span className="text-emerald-deep dark:text-emerald-deep-light relative inline-block">
                blindagem e resultados
                <span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-emerald-deep/20 dark:bg-emerald-deep-light/20 -z-10 rounded" />
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-ice-white/70 max-w-2xl leading-relaxed">
              Respostas ágeis para demandas corporativas complexas, proteção contra riscos tributários e conflitos familiares severos. Atendimento personalizado e sob sigilo absoluto.
            </p>

            {/* Quick trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <span id="hero-trust-item-1" className="p-1 bgColor bg-emerald-deep/10 text-emerald-deep dark:bg-emerald-deep-light/10 dark:text-emerald-deep-light rounded-md">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Resolução Célere</h3>
                  <p className="text-xs text-slate-500 dark:text-ice-white/50">Decisões estratégicas e desburocratização.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5">
                <span id="hero-trust-item-2" className="p-1 bgColor bg-emerald-deep/10 text-emerald-deep dark:bg-emerald-deep-light/10 dark:text-emerald-deep-light rounded-md">
                  <Users className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Especialistas Dedicados</h3>
                  <p className="text-xs text-slate-500 dark:text-ice-white/50">Foco total no êxito da sua demanda.</p>
                </div>
              </div>
            </div>

            {/* Micro Rating */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-ice-white/60">
                Avaliado com pontuação máxima de no Google Business com base em depoimentos reais de executivos e empresas.
              </p>
            </div>

          </div>

          {/* Form Area / Scheduling Lead Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer glow effect card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-deep to-emerald-deep/30 rounded-2xl blur-lg opacity-25" />
              
              <div className="relative bg-white dark:bg-warm-slate rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8">
                
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Solicite Análise de Viabilidade
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-ice-white/60 mt-1">
                    Preencha o formulário e tenha resposta do especialista em até 15 minutos úteis.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-scaleUp">
                    <div className="w-16 h-16 bg-emerald-deep/15 text-emerald-deep dark:bg-emerald-deep-light/20 dark:text-emerald-deep-light rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-ice-white">Análise Solicitada!</h3>
                    <p className="text-sm text-slate-500 dark:text-ice-white/60 max-w-xs mx-auto">
                      Recebemos seus dados com sucesso. O advogado especialista no seu nicho já está realizando o pré-estudo do seu caso e entrará em contato em breve.
                    </p>
                    <div className="text-xs py-2 px-3 bg-emerald-deep-light/40 dark:bg-emerald-deep/10 text-emerald-deep dark:text-emerald-deep-light inline-block rounded-md font-medium">
                      Atendimento priorizado por nível de urgência
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" id="hero-scheduling-lead-form">
                    
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: João da Silva Santos"
                        className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-red-500 bg-red-50/10 focus:border-red-500' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-deep'
                        }`}
                        id="form-lead-name"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1.5">
                          WhatsApp / Celular
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-colors ${
                            errors.phone 
                              ? 'border-red-500 bg-red-50/10 focus:border-red-500' 
                              : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-deep'
                          }`}
                          id="form-lead-phone"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1.5">
                          Área de Interesse
                        </label>
                        <select
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-deep focus:outline-none transition-colors"
                          id="form-lead-specialty"
                        >
                          <option value="corporativo">Empresarial & Societário</option>
                          <option value="civil">Sucessões, Holding & Família</option>
                          <option value="trabalhista">Trabalhista Corporativo</option>
                          <option value="imobiliario">Imobiliário & Usucapião</option>
                          <option value="tributario">Direito Tributário</option>
                          <option value="penal_economico">Penal Econômico</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: joao@suaempresa.com.br"
                        className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-red-500 bg-red-50/10 focus:border-red-500' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-deep'
                        }`}
                        id="form-lead-email"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1.5">
                        Resumo do Caso (Garantia de Sigilo)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Descreva brevemente o problema para direcionarmos ao profissional correto..."
                        className={`w-full text-sm px-4 py-2 rounded-lg border focus:outline-none transition-colors resize-none ${
                          errors.message 
                            ? 'border-red-500 bg-red-50/10 focus:border-red-500' 
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-deep'
                        }`}
                        id="form-lead-message"
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      id="form-lead-submit-btn"
                      className="w-full py-3 px-4 bg-emerald-deep hover:bg-emerald-deep-hover text-white rounded-lg text-sm font-bold shadow-lg shadow-emerald-deep/20 hover:shadow-emerald-deep/35 transition-all text-center flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-deep/50"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agendar Consulta de Viabilidade</span>
                    </button>

                    <div className="text-[10px] text-center text-slate-400 dark:text-ice-white/40 mt-3 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-deep" />
                      Seus dados estão protegidos por criptografia e LGPD.
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
