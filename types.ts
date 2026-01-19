export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: 'medine' | 'kudus' | 'iran' | 'ozel';
  weight: string; // e.g. "500g"
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Discount {
  id: string;
  code: string;
  percentage: number;
  isActive: boolean;
}

export interface SiteSettings {
  heroImageUrl: string;
  heroTitle: string;
  heroSubtitle: string;
}

export type ViewState = 'shop' | 'admin';

export enum AdminTab {
  LIST = 'LIST',
  ADD = 'ADD',
  COUPONS = 'COUPONS',
  SETTINGS = 'SETTINGS'
}