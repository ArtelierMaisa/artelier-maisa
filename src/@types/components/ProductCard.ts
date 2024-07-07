export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  onSeeMore?(): void;
}
