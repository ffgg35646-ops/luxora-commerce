export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;

  category: string;
  brand: string;

  price: number;
  salePrice?: number;

  stock: number;
  sku: string;

  images: string[];

  rating: number;
  reviewsCount: number;

  featured: boolean;
  isNew: boolean;
  isSale: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: 'customer' | 'admin';
  addresses: Address[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  type: 'fixed' | 'percentage';
  value: number;
}
