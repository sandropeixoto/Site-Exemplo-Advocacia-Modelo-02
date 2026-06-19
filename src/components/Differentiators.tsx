import React from 'react';
import { Zap, Eye, Compass, Cpu, CheckSquare } from 'lucide-react';

export default function Differentiators() {
  const ds = [
    {
      icon: <Zap className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />,
      title: 'Retorno em até 15 Minutos',
      description: 'Nossa equipe possui canais diretos integrados e plantão emergencial. Qualquer dúvida societária, criminal ou civil urgente é respondida imediatamente pelo especialista, sem secretárias ou intermediários.'
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />,
      title: 'Transparência em Linguagem Simples',
      description: 'Eliminamos o "juridiquês". Explicamos cada passo processual de forma compreensível e fornecemos atualizações semanais proativas. Você sempre saberá exatamente o andamento da sua causa.'
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />,
      title: 'Advocacia de Vanguarda (Digital/Paperless)',
      description: 'Zero pilhas de papéis. Toda a nossa infraestrutura opera na nuvem segura no ecossistema Google Cloud. Coleta de assinaturas digitais instantânea para otimizar o tempo e poupar despesas de cartório.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-deep dark:text-emerald-deep-light" />,
      title: 'Estratégia sob Medida para Prevenção',
      description: 'Não apenas defendemos no tribunal; mapeamos os riscos antes que eles aconteçam. Nossa auditoria preventiva estuda o passivo e fecha brechas críticas em contratos e folhas de pagamento.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white dark:bg-deep-gray relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-deep dark:text-emerald-deep-light uppercase tracking-widest bg-emerald-deep-light/60 dark:bg-emerald-deep/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pilares do Nosso Atendimento de Elite
          </h2>
          <p className="text-slate-600 dark:text-ice-white/70 mt-4 leading-relaxed">
            Unimos o rigor intelectual e técnico dos maiores escritórios à agilidade, proximidade e inovação tecnológica das startups contemporâneas.
          </p>
        </div>

        {/* Bento Grid layout style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ds.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-warm-slate border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-5 items-start hover:shadow-lg transition-all duration-300 group"
              id={`diff-item-${idx}`}
            >
              
              {/* Icon visual wrap */}
              <div className="p-3 bg-white dark:bg-slate-950 text-emerald-deep rounded-xl border border-slate-100 dark:border-slate-850 shadow-sm flex-shrink-0 group-hover:bg-emerald-deep/10 transition-colors">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-deep dark:group-hover:text-emerald-deep-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-ice-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Small security stamp banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-deep to-emerald-deep-hover text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle logo bg decoration */}
          <div className="absolute right-[-100px] bottom-[-100px] w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold">Conselho de Ética & Compromisso Profissional</h3>
              <p className="text-sm text-emerald-deep-light/80 max-w-2xl leading-relaxed">
                Toda a nossa atuação é pautada estritamente no Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil). Agimos com sigilo profissional garantido por prerrogativas constitucionais inerentes à profissão advocatícia.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="flex items-center gap-3 py-3 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                <CheckSquare className="w-6 h-6 text-emerald-deep-light" />
                <div className="text-left">
                  <p className="text-xs text-emerald-deep-light uppercase font-bold tracking-widest">Inscrição Principal</p>
                  <p className="text-sm font-extrabold text-white">Conselho Federal / OAB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
