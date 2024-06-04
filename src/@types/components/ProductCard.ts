export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  onSeeMore?(): void;
}
