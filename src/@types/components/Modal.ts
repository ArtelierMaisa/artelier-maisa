export interface ProductImageProps {
  id: string;
  uri: string;
  name: string;
}

export interface ProductProps {
  id: string;
  title: string;
  images: ProductImageProps[];
  whatsapp: string | null;
}

export interface ModalProps {
  isOpen: boolean;
  product: ProductProps;
  onClose?(): void;
}
