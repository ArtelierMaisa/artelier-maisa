interface ImageProps {
  id: string;
  name: string;
  uri: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  isOccult: boolean;
  price: string;
  images: ImageProps[];
  material: string | null;
  size: string | null;
  weight: string | null;
  whatsapp: string | null;
  createdAt: number;
  updatedAt?: number;
}
