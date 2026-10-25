export interface MenuItem {
  id: string;
  name: string;
  originTag: string;
  description: string;
  samplePrice: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  groupLabel: 'Signature Kitchen' | 'Accompaniments & Refreshments';
  subtitle: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  image: string;
  caption: string;
}

export interface ReservationEnquiry {
  name: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
}
