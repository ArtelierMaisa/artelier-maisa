import { Carousel as FlowbiteCarousel } from 'flowbite-react';

import { CarouselProps } from '../../@types';
import { carouselHeights } from '../../constants';
import { CarouselButton } from '../CarouselButton';

export function Carousel(props: CarouselProps) {
  const {
    children,
    type = 'banner',
    isSlide = true,
    showIndicators = true,
  } = props;

  const hasChildren = Array.isArray(children) ? children.length > 1 : false;

  const isProduct = type === 'product';
  const isBanner = type === 'banner';
  const slideInterval = isBanner ? 3000 : 5000;

  return (
    <div className={`max-w-full ${carouselHeights[type]}`}>
      <FlowbiteCarousel
        slide={isSlide && !isProduct}
        slideInterval={slideInterval}
        indicators={showIndicators && isBanner && hasChildren}
        rightControl={<CarouselButton type='previous' />}
        leftControl={<CarouselButton type='next' />}
      >
        {children}
      </FlowbiteCarousel>
    </div>
  );
}
