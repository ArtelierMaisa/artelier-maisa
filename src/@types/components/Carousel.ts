export type CarouselType = 'banner' | 'product';

export interface CarouselImageProps {
  id: string;
  url: string;
}

export interface CarouselProps {
  type: CarouselType;
  images: CarouselImageProps[];
  isSlide?: boolean;
}
