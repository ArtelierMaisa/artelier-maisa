import { Carousel as FlowbiteCarousel } from 'flowbite-react';
import { memo } from 'react';

import { CarouselProps } from '../../@types';
import { carouselHeights } from '../../constants';
import { CarouselButton } from '../';

function Carousel(props: CarouselProps) {
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

  const rightControl: React.JSX.Element = !hasChildren ? (
    <span />
  ) : (
    <CarouselButton type='previous' />
  );
  const leftControl: React.JSX.Element = !hasChildren ? (
    <span />
  ) : (
    <CarouselButton type='next' />
  );

  return (
    <div className={`max-w-full ${carouselHeights[type]}`}>
      <FlowbiteCarousel
        slide={isSlide && !isProduct}
        slideInterval={slideInterval}
        indicators={showIndicators && isBanner && hasChildren}
        rightControl={rightControl}
        leftControl={leftControl}
      >
        {children}
      </FlowbiteCarousel>
    </div>
  );
}

export default memo(Carousel);
