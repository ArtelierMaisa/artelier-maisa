import { Card } from 'flowbite-react';
import { memo } from 'react';

import { ProductCardProps } from '../../@types';
import { buildWhatsAppUrl } from '../../utils';
import { GenericButton, Icon, Metric, Text } from '../';

function ProductCard(props: ProductCardProps) {
  const { name, description, price, material, size, weight, image, onSeeMore } =
    props;

  function onSendWhatsAppMessage(): void {
    window.open(
      buildWhatsAppUrl({
        message: `Olá, estou interresado(a) no produto "${name}" que achei no seu site, gostaria de conversar sobre ele.`,
      }),
    );
  }

  const renderImage: React.JSX.Element = (
    <img
      src={image}
      alt={name}
      className='w-full h-[21.75rem] object-cover rounded-tl-lg rounded-tr-lg'
    />
  );

  return (
    <Card
      className='w-full max-w-[25rem] h-auto min-h-[33.75rem] bg-background-color shadow-default'
      renderImage={() => renderImage}
    >
      <Text type='semibold' size='xl' toCenter>
        {name}
      </Text>

      <div className='w-full max-h-12 line-clamp-2 overflow-hidden text-ellipsis'>
        <Text toCenter>{description}</Text>
      </div>

      <div className='flex flex-col w-full justify-center my-4 gap-5'>
        <Metric variant='size' value={size} />

        <Metric variant='weight' value={weight} />

        <Metric variant='material' value={material} />
      </div>

      <Text
        type='medium'
        className='w-full mb-2 text-base sm:text-xl text-right'
      >
        Por{' '}
        <span className='inline text-text font-bold sm:text-semibold text-base sm:text-xl'>
          {price}
        </span>
      </Text>

      <div className='flex flex-row w-full justify-between items-center gap-2'>
        <GenericButton
          title='Ver mais'
          type='small'
          isHugWidth
          onClick={onSeeMore}
        />

        <button
          type='button'
          title='Entrar em contato via WhatsApp'
          className='flex justify-center items-center p-2.5 bg-whatsapp rounded-full cursor-pointer hover:opacity-90 transition-colors duration-300 focus:outline-none focus:ring focus:ring-whatsapp focus:border-whatsapp'
          onClick={onSendWhatsAppMessage}
        >
          <Icon variant='whatsapp-logo' size='small' />
        </button>
      </div>
    </Card>
  );
}

export default memo(ProductCard);
