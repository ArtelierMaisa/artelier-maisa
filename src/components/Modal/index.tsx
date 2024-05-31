import ReactModal from 'react-modal'

import { Carousel, CarouselImage, Metric, Icon, Text, WhatsAppButton } from '../';
import { ModalProps } from '../../@types';

export function Modal(props: ModalProps) {
  const { isOpen, product, onClose } = props

  const hasMetrics = !!product.size || !!product.weight || !!product.material

  return (
    <ReactModal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      shouldCloseOnEsc 
      shouldCloseOnOverlayClick
      overlayClassName='fixed inset-0 bg-text50'
      className='flex flex-col w-full h-full justify-center items-center'
    >
      <div className='relative flex flex-col w-[40rem] h-auto overflow-hidden rounded-2xl bg-background-color shadow-default'>
        <button 
          type='button' 
          className='absolute top-3 right-3 z-20 flex w-8 h-8 justify-center items-center bg-primary rounded-full shadow-default hover:opacity-60 transition-colors duration-300'
          onClick={onClose}
        >
          <Icon variant='x' color='background-color' size='xx-small' />
        </button>
        
        <Carousel type='product'>
          {product.images.map((image) => <CarouselImage key={image.id} {...image} />)}
        </Carousel>

        <div className='flex flex-col w-full h-full items-center p-4 gap-2'>
          <Text type='semibold' size='xl' toCenter>{product.title}</Text>

          <Text toCenter>{product.description}</Text>

          {hasMetrics &&
            <div className='flex flex-row flex-wrap w-full justify-center my-4 gap-4'>
              {product.size && <Metric variant='size' value={product.size} />}

              {product.weight && <Metric variant='weight' value={product.weight} />}

              {product.material && <Metric variant='material' value={product.material} />}
            </div>
          }

          <WhatsAppButton product={product.title} phone={product.whatsapp} />
        </div>
      </div>
    </ReactModal>
  )
}