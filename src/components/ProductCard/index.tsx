import { Card } from 'flowbite-react';
import { memo } from 'react';

import { ProductCardProps } from '../../@types';
import { GenericButton, Text } from '../';

function ProductCard(props: ProductCardProps) {
  const { id, name, description, price, image, onSeeMore } = props;

  return (
    <Card
      id={id}
      className='max-w-[25rem] max-h-[33.75rem] bg-background-color shadow-default'
      renderImage={() => (
        <img
          className='w-full h-[21.75rem] object-cover rounded-tl-lg rounded-tr-lg'
          src={image}
          alt={`Image do Produto ${name}`}
        />
      )}
    >
      <Text type='semibold' size='xl' toCenter>
        {name}
      </Text>

      <div className='w-full max-h-12 line-clamp-2 overflow-hidden text-ellipsis'>
        <Text toCenter>{description}</Text>
      </div>

      <div className='flex flex-row w-full justify-between items-center'>
        <GenericButton title='Ver mais' type='small' onClick={onSeeMore} />

        <Text type='medium' className='text-base sm:text-xl'>
          Por{' '}
          <span className='inline text-text font-bold sm:text-semibold text-base sm:text-xl'>
            {price}
          </span>
        </Text>
      </div>
    </Card>
  );
}

export default memo(ProductCard);
