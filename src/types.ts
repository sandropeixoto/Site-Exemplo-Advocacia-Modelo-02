export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  message: string;
  date: string;
  status: 'Pendente' | 'Contatado' | 'Concluído';
}

export interface LegalSpecialty {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  tags: string[];
  contactMessage: string; // Message to prepopulate in WhatsApp/form
}

export interface StatisticsData {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtitle: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coords: { lat: number; lng: number };
}
