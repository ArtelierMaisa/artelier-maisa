export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  weight: string | null;
  size: string | null;
  material: string | null;
  onSeeMore?(): void;
}
