import type { Product } from './product';
import type { Coupon } from './coupon';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];

  coupon: Coupon | null;

  subtotal: number;

  discount: number;

  shipping: number;

  total: number;
}
