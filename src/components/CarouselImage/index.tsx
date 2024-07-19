import { memo } from 'react';

import { CarouselImageProps } from '../../@types';

function CarouselImage(props: CarouselImageProps) {
  const { name, uri, className = '', isContained = false } = props;

  const objectFit = isContained ? 'object-contain' : 'object-cover';

  return (
    <img
      src={uri}
      alt={name}
      className={`w-full h-full max-w-full rounded-none ${objectFit} ${className}`}
    />
  );
}

export default memo(CarouselImage);
