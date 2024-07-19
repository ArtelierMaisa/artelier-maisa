import { Card } from 'flowbite-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProductCardProps } from '../../@types';
import { GenericButton, Text, Translator } from '../';

function ProductCard(props: ProductCardProps) {
  const { name, description, price, image, onSeeMore } = props;

  const { t } = useTranslation();

  const renderImage: React.JSX.Element = (
    <img
      src={image}
      alt={name}
      className='w-full h-[21.75rem] object-cover rounded-tl-lg rounded-tr-lg'
    />
  );

  return (
    <Card
      className='max-w-[25rem] max-h-[33.75rem] bg-background-color shadow-default'
      renderImage={() => renderImage}
    >
      <Text type='semibold' size='xl' toCenter>
        {name}
      </Text>

      <div className='w-full max-h-12 line-clamp-2 overflow-hidden text-ellipsis'>
        <Text toCenter>{description}</Text>
      </div>

      <div className='flex flex-row w-full justify-between items-center gap-2'>
        <GenericButton
          title={t('productCard.seeMore')}
          type='small'
          onClick={onSeeMore}
        />

        <Text type='medium' className='text-base sm:text-xl'>
          <Translator path='productCard.by' />{' '}
          <span className='inline text-text font-bold sm:text-semibold text-base sm:text-xl'>
            {price}
          </span>
        </Text>
      </div>
    </Card>
  );
}

export default memo(ProductCard);
