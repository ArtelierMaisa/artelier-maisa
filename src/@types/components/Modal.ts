export interface ProductImageProps {
  id: string;
  uri: string;
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  images: ProductImageProps[];
  price: string;
  material: string | null;
  size: string | null;
  weight: string | null;
  whatsapp: string | null;
}

export interface ModalProps {
  isOpen: boolean;
  product: ProductProps;
  onClose?(): void;
}
