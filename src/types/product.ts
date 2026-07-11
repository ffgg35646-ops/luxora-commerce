export interface Product {
  id: string;

  name: string;
  slug: string;

  description: string;
  shortDescription: string;

  sku: string;

  category: string;
  brand: string;

  price: number;
  salePrice?: number;

  stock: number;

  images: string[];

  rating: number;
  reviewsCount: number;

  featured: boolean;
  isNew: boolean;
  isSale: boolean;
  isBestSeller: boolean;

  colors?: string[];
  sizes?: string[];

  tags?: string[];

  specifications?: Record<string, string>;

  createdAt: string;
  updatedAt: string;
}
