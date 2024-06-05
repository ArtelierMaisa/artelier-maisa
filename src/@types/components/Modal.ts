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
  size?: string;
  weight?: string;
  material?: string;
  whatsapp?: string;
}

export interface ModalProps {
  isOpen: boolean;
  product: ProductProps;
  onClose?(): void;
}
