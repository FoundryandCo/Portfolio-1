export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'brunch' | 'lunch';
  price: number;
  description: string;
  image: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  isInstagram?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface ReservationData {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  requests?: string;
  tableNumber: number;
}
