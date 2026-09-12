export interface MenuItem {
  id: string;
  name: string;
  cutOrOrigin?: string;
  description: string;
  pricePlaceholder?: string;
  image: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  image: string;
  caption: string;
}

export interface ReservationSubmission {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  specialRequests: string;
}
