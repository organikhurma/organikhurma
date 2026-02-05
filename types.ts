export type ViewState = 
  | 'home' 
  | 'product-detail' 
  | 'catalog' 
  | 'cart' 
  | 'contact' 
  | 'admin-dashboard' 
  | 'admin-products' 
  | 'admin-add-product';

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  status: 'active' | 'critical' | 'passive';
  image: string;
  rating: number;
  reviews: number;
  tags?: string[];
}

export interface Order {
  id: string;
  customer: string;
  customerInitials: string;
  date: string;
  status: 'Preparing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  colorClass: string;
}

export interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  organic: boolean;
}