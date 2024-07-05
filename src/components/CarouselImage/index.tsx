import { memo } from 'react';

import { CarouselImageProps } from '../../@types';

function CarouselImage(props: CarouselImageProps) {
  const { name, uri } = props;

  return (
    <img
      src={uri}
      alt={name}
      className='w-full h-full max-w-full rounded-none object-cover'
    />
  );
}

export default memo(CarouselImage);
