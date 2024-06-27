import { About, Banner, Category, Highlight, Product } from '../';

export interface UserContextProps {
  about: About;
  highlights: Highlight[];
  banners: Banner[];
  categories: Category[];
  products: Product[];
  isLoaded: boolean;
}
