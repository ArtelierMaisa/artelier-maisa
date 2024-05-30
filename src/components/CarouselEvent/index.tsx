import { Card } from 'flowbite-react';

import { CarouselEventProps } from '../../@types';
import { Text } from '../Text';

export function CarouselEvent(props: CarouselEventProps) {
  const { description, id, image, title } = props;

  return (
    <div className='flex w-full h-full justify-center items-center'>
      <Card
        id={id}
        className='w-3/4 md:w-5/6 h-5/6 bg-background-color shadow-default'
        horizontal
        renderImage={() => (
          <img
            className='w-1/3 h-full hidden md:flex object-cover rounded-e-lg'
            src={image}
            alt={`Image do Evento ${title}`}
          />
        )}
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
