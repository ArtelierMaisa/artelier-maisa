import { ReactNode } from 'react';

export type CarouselType = 'banner' | 'product' | 'event';

export interface CarouselProps {
  children: ReactNode;
  type?: CarouselType;
  isSlide?: boolean;
  showIndicators?: boolean;
}
