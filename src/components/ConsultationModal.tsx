import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Mail, Smartphone, Send, MessageSquare } from 'lucide-react';
import { LegalSpecialty, ContactLead } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSpecialty: LegalSpecialty | null;
  onAddLead: (lead: Omit<ContactLead, 'id' | 'date' | 'status'>) => void;
}

export default function ConsultationModal({ isOpen, onClose, selectedSpecialty, onAddLead }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: 'corporativo',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedSpecialty) {
      setFormData((prev) => ({
        ...prev,
        specialty: selectedSpecialty.id,
        message: selectedSpecialty.contactMessage
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        specialty: 'corporativo',
        message: 'Gostaria de agendar uma consulta inicial de urgência com um advogado.'
      }));
    }
  }, [selectedSpecialty, isOpen]);

  if (!isOpen) return null;

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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome completo é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório.';
    }
    if (!formData.message.trim()) newErrors.message = 'A mensagem não pode ser vazia.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddLead(formData);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white dark:bg-warm-slate border border-slate-100 dark:border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Header Modal */}
        <div className="bg-emerald-deep dark:bg-emerald-deep text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            id="modal-close-button-top"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-xl font-bold tracking-tight">
            {selectedSpecialty ? `Setor: ${selectedSpecialty.title}` : 'Consulta de Urgência Credenciada'}
          </h3>
          <p className="text-xs text-emerald-deep-light/80 mt-1">
            Sua solicitação de agendamento é enviada diretamente ao sócio-diretor da área processual.
          </p>
        </div>

        {/* Success window overlay */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4 py-16">
            <div className="w-16 h-16 bg-emerald-deep-light/80 text-emerald-deep dark:bg-emerald-deep-light/20 dark:text-emerald-deep-light rounded-full flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">Pré-estudo Iniciado!</h4>
            <p className="text-sm text-slate-500 dark:text-ice-white/70 max-w-sm mx-auto">
              Recebemos seus dados. Um advogado especialista sênior entrará em contato via WhatsApp/Telefone para detalhar as vias processuais. Aguarde 15 minutos úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4" id="modal-consultation-form">
            
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1">
                Nome do Requerente
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ex: Carlos Alberto de Oliveira"
                className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                  errors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200 dark:border-slate-750 bg-slate-50/20 dark:bg-slate-950 focus:border-emerald-deep'
                }`}
                id="modal-form-name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(11) 98765-4321"
                  className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                    errors.phone ? 'border-red-500 bg-red-50/10' : 'border-slate-200 dark:border-slate-750 bg-slate-50/20 dark:bg-slate-950 focus:border-emerald-deep'
                  }`}
                  id="modal-form-phone"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1">
                  Área Requerida
                </label>
                <select
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-750 bg-slate-50/20 dark:bg-slate-950 focus:border-emerald-deep focus:outline-none transition-all"
                  id="modal-form-specialty"
                >
                  <option value="corporativo">Empresarial & Blindagem</option>
                  <option value="civil">Holding & Sucessões</option>
                  <option value="trabalhista">Direito do Trabalho</option>
                  <option value="imobiliario">Direito Imobiliário</option>
                  <option value="tributario">Tributário & Créditos</option>
                  <option value="penal_economico">Penal Econômico</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1">
                E-mail Corporativo/Pessoal
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex: carlos@oliveiratransporte.com"
                className={`w-full text-sm px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200 dark:border-slate-750 bg-slate-50/20 dark:bg-slate-950 focus:border-emerald-deep'
                }`}
                id="modal-form-email"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-ice-white/80 mb-1">
                Fatos Ocorridos e Demanda
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full text-sm px-4 py-2 rounded-lg border focus:outline-none transition-all resize-none ${
                  errors.message ? 'border-red-500 bg-red-50/10' : 'border-slate-200 dark:border-slate-750 bg-slate-50/20 dark:bg-slate-950 focus:border-emerald-deep'
                }`}
                id="modal-form-message"
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              id="modal-form-submit"
              className="w-full py-3 bg-emerald-deep hover:bg-emerald-deep-hover text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-deep/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Enviar via Canal Protocolado</span>
            </button>

            <div className="text-[10px] text-center text-slate-400">
              O envio destas informações não constitui contrato formal de prestação de serviços, mas cria o dever legal de sigilo recíproco.
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
