export interface Category {
  icon: string;
  title: string;
  image: string;
  description: string;
}

export interface Freelancer {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
  skills: string[];
  hourlyRate: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
  projectType: string;
  image: string;
} 