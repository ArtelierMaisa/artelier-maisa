import { Card } from 'flowbite-react';
import React, { memo } from 'react';

import { CarouselEventProps } from '../../@types';
import { Text } from '../';

function CarouselEvent(props: CarouselEventProps) {
  const { description, image, title } = props;

  const renderImage: React.JSX.Element = (
    <img
      className='w-1/3 h-full hidden md:flex object-cover rounded-e-lg'
      src={image}
      alt={title}
    />
  );

  return (
    <div className='flex w-full h-full justify-center items-center'>
      <Card
        className='w-3/4 md:w-5/6 h-5/6 bg-background-color shadow-default'
        renderImage={() => renderImage}
        horizontal
      >
        <div className='flex flex-col sm:w-full sm:h-full justify-center items-center md:gap-6 gap-4 md:py-4 p-2 md:pr-12 md:pl-20'>
          <div className='line-clamp-2 overflow-hidden text-ellipsis'>
            <Text type='semibold' size='2xl' toCenter>
              {title}
            </Text>
          </div>

          <div className='2xl:line-clamp-[12] xl:line-clamp-[10] md:line-clamp-6 line-clamp-4 overflow-hidden text-ellipsis'>
            <Text type='medium' toCenter>
              {description}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default memo(CarouselEvent);
