import { LegalSpecialty, StatisticsData, Testimonial, OfficeLocation } from './types';

export const SPECIALTIES: LegalSpecialty[] = [
  {
    id: 'corporativo',
    title: 'Direito Empresarial & Blindagem',
    shortDescription: 'Proteção jurídica para o crescimento seguro da sua empresa.',
    longDescription: 'Fusões, aquisições, estruturação societária personalizada, contratos robustos e consultoria preventiva para blindar o seu patrimônio empresarial contra vulnerabilidades do mercado.',
    iconName: 'Briefcase',
    tags: ['Societário', 'Contratos', 'Tributário', 'M&A'],
    contactMessage: 'Olá! Gostaria de conversar com um especialista em Direito Empresarial sobre como blindar minha empresa.'
  },
  {
    id: 'civil',
    title: 'Família, Sucessões & Planejamento',
    shortDescription: 'Solução ágil e humanizada para conflitos e herança.',
    longDescription: 'Inventários céleres judiciais ou extrajudiciais, divórcios eficientes, holdings familiares, planejamento de sucessão de patrimônio e proteção integral de direitos com sensibilidade e técnica.',
    iconName: 'Users',
    tags: ['Holdings', 'Inventário', 'Sucessão', 'Divórcio'],
    contactMessage: 'Olá! Preciso de orientação na área de Família e Sucessões de forma sigilosa.'
  },
  {
    id: 'trabalhista',
    title: 'Direito do Trabalho Estratégico',
    shortDescription: 'Defesa incisiva de direitos trabalhistas de alta complexidade.',
    longDescription: 'Defesa e patrocínio em causas trabalhistas complexas. Atuação preventiva focada em cargos executivos, passivos trabalhistas elevados e compliance laboral completo.',
    iconName: 'ShieldAlert',
    tags: ['Cargos de Executivo', 'Compliance', 'Prevenção de Danos', 'Rescisões'],
    contactMessage: 'Olá! Gostaria de suporte estratégico sobre Direito do Trabalho.'
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário & Regularizações',
    shortDescription: 'Aquisição segura, contratos e usucapião de alta celeridade.',
    longDescription: 'Assessoria em transações de compra e venda bilionárias, regularização de imóveis urbanos e rurais complexos, reintegração de posse e consultoria em incorporações imobiliárias.',
    iconName: 'Home',
    tags: ['Regularização', 'Usucapião', 'Due Diligence', 'Arrematações'],
    contactMessage: 'Olá! Tenho uma dúvida em Direito Imobiliário e gostaria de regularizar meu imóvel.'
  },
  {
    id: 'tributario',
    title: 'Recuperação de Crédito & Tributário',
    shortDescription: 'Redução legal da carga de impostos e recuperação tributária.',
    longDescription: 'Identificação de créditos tributários pagos indevidamente nos últimos 5 anos, teses fiscais de vanguarda e defesas contra autuações fiscais abusivas de órgãos municipais, estaduais ou federais.',
    iconName: 'Database',
    tags: ['Teses Tributárias', 'Redução Fiscal', 'PIS/COFINS', 'Defesa Administrativa'],
    contactMessage: 'Olá! Desejo realizar um diagnóstico tributário inicial da minha empresa para recuperar impostos pagos.'
  },
  {
    id: 'penal_economico',
    title: 'Penal Empresarial & Compliance',
    shortDescription: 'Defesa corporativa imediata de alta discrição.',
    longDescription: 'Atuação exclusiva e personalizada no âmbito do Direito Penal Econômico, crimes tributários, lavagem de capitais, fraudes corporativas e representação altamente técnica no tribunal do júri e cortes federais.',
    iconName: 'Scale',
    tags: ['Direito Penal', 'Crimes Financeiros', 'Sigilo Absoluto', 'Compliance'],
    contactMessage: 'Olá! Gostaria de agendar uma reunião sigilosa com o setor Penal Econômico.'
  }
];

export const STATISTICS: StatisticsData[] = [
  {
    id: 'tax_sucesso',
    value: 98.4,
    suffix: '%',
    label: 'Taxa de Éxito',
    subtitle: 'Avaliado em decisões judiciais favoráveis ou acordos benéficos'
  },
  {
    id: 'casos_resolvidos',
    value: 3450,
    suffix: '+',
    label: 'Clientes Atendidos',
    subtitle: 'Famílias e empresas defendidas com excelência ética e rigor técnico'
  },
  {
    id: 'milhoes_recuperados',
    value: 75,
    suffix: 'M+',
    label: 'R$ Economizados',
    subtitle: 'Redução de passivos judiciais e recuperação de tributos federais'
  },
  {
    id: 'anos_atendimento',
    value: 12,
    suffix: ' Anos',
    label: 'Atuação de Elite',
    subtitle: 'Banca estruturada focada em resultados rápidos e humanizados'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep1',
    name: 'Sérgio Mendes',
    role: 'CEO - Mendes Logística S/A',
    content: 'O suporte do escritório reduziu nossa carga tributária e recuperou centenas de milhares de reais pagos indevidamente em apenas 3 meses de auditoria preventiva. Sensacionais.',
    rating: 5
  },
  {
    id: 'dep2',
    name: 'Dra. Carolina Albuquerque',
    role: 'Herdeira & Investidora',
    content: 'Realizaram o inventário extrajudicial da nossa família com uma agilidade impressionante. O que eu achava que demoraria anos, resolveu-se amigavelmente em semanas.',
    rating: 5
  },
  {
    id: 'dep3',
    name: 'Marcos Vinícius Prado',
    role: 'Empreendedor Imobiliário',
    content: 'A equipe de assessoria de transações imobiliárias barrou um prejuízo milionário de uma compra que apresentava riscos ocultos na matricula do imóvel. Confiança total.',
    rating: 5
  }
];

export const OFFICE_CONTACT: OfficeLocation = {
  city: 'São Paulo - Centro Financeiro',
  address: 'Av. Brigadeiro Faria Lima, 3477 - 14º Andar, Itaim Bibi, São Paulo - SP, 04538-133',
  phone: '(11) 4003-8822',
  email: 'diretoria@apexadvocacia.com.br',
  hours: 'Segunda a Sexta das 08h às 19h (Disponibilidade emergencial 24/7)',
  coords: { lat: -23.5828, lng: -46.6834 }
};
