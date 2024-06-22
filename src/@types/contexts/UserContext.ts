import { About, Highlight } from '../';

export interface UserContextProps {
  about: About;
  highlights: Highlight[];
  isLoaded: boolean;
}
