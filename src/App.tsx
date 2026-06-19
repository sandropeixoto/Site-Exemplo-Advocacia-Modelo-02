/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Stats from './components/Stats';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { ContactLead, LegalSpecialty } from './types';
import { Sun, Moon, CheckCircle2, ShieldCheck, HeartHandshake, Eye, MessageSquareCode } from 'lucide-react';

const INITIAL_MOCK_LEADS: ContactLead[] = [
  {
    id: 'lead-mock-1',
    name: 'Sérgio Rodrigues Costa',
    email: 'sergio@costatransito.com.br',
    phone: '(11) 98844-3321',
    specialty: 'corporativo',
    message: 'Necessitamos de revisão e reestruturação para um contrato societário de nossa transportadora com o novo grupo investidor externo.',
    date: '19/06/2026, 14:15',
    status: 'Contatado'
  },
  {
    id: 'lead-mock-2',
    name: 'Amanda Neves Silveira',
    email: 'amanda.silveira@outlook.com',
    phone: '(21) 97120-4554',
    specialty: 'civil',
    message: 'Gostaria de formalizar um estudo de holding familiar para planejamento de herança imobiliária com sigilo e segurança.',
    date: '19/06/2026, 16:30',
    status: 'Pendente'
  }
];

export default function App() {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<LegalSpecialty | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load leads and theme from localStorage
  useEffect(() => {
    const savedLeads = localStorage.getItem('apex_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    } else {
      setLeads(INITIAL_MOCK_LEADS);
      localStorage.setItem('apex_leads', JSON.stringify(INITIAL_MOCK_LEADS));
    }

    // Auto theme detection or saved preference
    const savedTheme = localStorage.getItem('apex_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update theme manual override
  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('apex_theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('apex_theme', 'light');
    }
  };

  // Add captured lead
  const handleAddLead = (newLeadData: Omit<ContactLead, 'id' | 'date' | 'status'>) => {
    const freshLead: ContactLead = {
      ...newLeadData,
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }),
      status: 'Pendente'
    };

    const updatedLeads = [freshLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('apex_leads', JSON.stringify(updatedLeads));
  };

  // Handle specialty click to trigger modal popup
  const handleSelectSpecialtyToConsult = (specialty: LegalSpecialty) => {
    setSelectedSpecialty(specialty);
    setIsModalOpen(true);
  };

  // Open generic modal list
  const handleOpenGenericConsultation = () => {
    setSelectedSpecialty(null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-deep-gray text-slate-800 dark:text-ice-white transition-colors antialiased font-sans flex flex-col justify-between">
      
      {/* Complete Header top navigation */}
      <Header onOpenConsultationModal={handleOpenGenericConsultation} />

      {/* Manual & Auto theme switch Floating UI floating control */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <button
          onClick={handleToggleTheme}
          className="p-3 bg-emerald-deep dark:bg-emerald-deep-light text-white dark:text-deep-gray rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-emerald-deep-light/20 flex items-center justify-center"
          title={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
          id="manual-dark-theme-toggler-btn"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Container contents */}
      <main className="flex-grow">
        
        {/* HERO SECTION with live pre-scheduling leads converter */}
        <Hero onAddLead={handleAddLead} />

        {/* Dynamic Legal specialties directory */}
        <Specialties onSelectSpecialty={handleSelectSpecialtyToConsult} />

        {/* Live animated numeric counters statistics achievements */}
        <Stats />

        {/* Modern differentiators points list */}
        <Differentiators />

        {/* Customer success testimonials slider box */}
        <Testimonials />

      </main>

      {/* Footer contacts, locations and native map component */}
      <Footer />

      {/* Consultation conversational modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedSpecialty={selectedSpecialty}
        onAddLead={handleAddLead}
      />

    </div>
  );
}
