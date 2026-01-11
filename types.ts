export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  groundingLinks?: Array<{
    title: string;
    uri: string;
  }>;
}
