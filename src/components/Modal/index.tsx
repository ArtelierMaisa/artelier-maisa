import { memo } from 'react';
import ReactModal from 'react-modal';

import { ModalProps } from '../../@types';
import { buildWhatsAppUrl } from '../../utils';
import { Carousel, CarouselImage, Icon } from '../';

function Modal(props: ModalProps) {
  const { isOpen, product, onClose } = props;

  function onSendWhatsAppMessage(): void {
    window.open(
      buildWhatsAppUrl({
        message: `Olá, estou interresado(a) no produto "${product.title}" que achei no seu site, gostaria de conversar sobre ele.`,
      }),
    );
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      ariaHideApp={false}
      overlayClassName='fixed inset-0 bg-text50 border-none z-30'
      className='flex flex-col w-full h-full justify-center items-center px-4 py-8'
    >
      <div className='relative flex flex-col w-full md:w-[40rem] lg:w-[48rem] h-auto overflow-hidden p-2 lg:py-3 rounded-2xl bg-background-color shadow-default scrollbar scrollbar-w-3 scrollbar-thumb-rounded-lg scrollbar-thumb-primary scrollbar-track-background-color overflow-y-auto'>
        <button
          type='button'
          className='absolute top-3 right-3 z-20 flex size-10 justify-center items-center bg-primary rounded-full shadow-default hover:opacity-60 transition-colors duration-300 focus:outline-none focus:ring focus:ring-background-color focus:border-bacring-background-color'
          onClick={onClose}
        >
          <Icon variant='x' color='background-color' size='xx-small' />
        </button>

        <Carousel type='product'>
          {product?.images &&
            product.images.map(image => (
              <CarouselImage
                key={image.id}
                name={image.name}
                uri={image.uri}
                className='!w-auto !max-w-none !rounded-lg shadow-default'
                isContained
              />
            ))}
        </Carousel>

        <button
          type='button'
          title='Entrar em contato via WhatsApp'
          className='absolute bottom-3 right-3 z-20 flex size-10 justify-center items-center bg-whatsapp rounded-full cursor-pointer hover:opacity-90 transition-colors duration-300 focus:outline-none focus:ring focus:ring-whatsapp focus:border-whatsapp'
          onClick={onSendWhatsAppMessage}
        >
          <Icon variant='whatsapp-logo' size='x-small' />
        </button>
      </div>
    </ReactModal>
  );
}

export default memo(Modal);
