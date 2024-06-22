import { GenericImageProps } from './GenericImage';

export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: GenericImageProps;
  createdAt: number;
  removedAt: number;
}
