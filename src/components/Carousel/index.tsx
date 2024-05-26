import { Carousel as FlowbiteCarousel } from 'flowbite-react';

import { CarouselProps } from '../../@types';
import { heights } from '../../constants';
import { CarouselButton } from '../CarouselButton';

export function Carousel(props: CarouselProps) {
  const { images, type, isSlide = true } = props;

  const isProduct = type === 'product';
  const hasOneImage = images.length === 1;

  return (
    <div className={`max-w-full ${heights[type]}`}>
      <FlowbiteCarousel
        slide={isSlide && !isProduct}
        slideInterval={5000}
        indicators={!hasOneImage && !isProduct}
        rightControl={<CarouselButton type='previous' />}
        leftControl={<CarouselButton type='next' />}
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Imagem ${index + 1}`}
            className='w-full h-full max-w-full rounded-none object-cover'
          />
        ))}
      </FlowbiteCarousel>
    </div>
  );
}
