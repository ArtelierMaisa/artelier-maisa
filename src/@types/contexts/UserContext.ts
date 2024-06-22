import { About, Banner, Highlight } from '../';

export interface UserContextProps {
  about: About;
  highlights: Highlight[];
  banners: Banner[];
  isLoaded: boolean;
}
