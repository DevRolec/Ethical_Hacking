export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

export interface CurriculumWeek {
  week: number;
  title: string;
  description: string;
  topics: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Currency {
  USD = 'USD',
  NGN = 'NGN'
}

export type PaymentStatus = 'idle' | 'details' | 'processing' | 'success';
