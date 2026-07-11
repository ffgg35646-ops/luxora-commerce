import type { Address } from './address';

export interface User {
  id: string;

  firstName: string;
  lastName: string;

  username: string;

  email: string;

  phone: string;

  avatar: string;

  role: 'customer' | 'admin';

  verified: boolean;

  wishlist: string[];

  addresses: Address[];

  createdAt: string;

  updatedAt: string;
}
