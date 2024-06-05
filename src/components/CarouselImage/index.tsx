import { CarouselImageProps } from '../../@types';

export function CarouselImage(props: CarouselImageProps) {
  const { id, uri } = props;

  return (
    <img
      key={id}
      src={uri}
      alt='Imagem do Carousel'
      className='w-full h-full max-w-full rounded-none object-cover'
    />
  );
}
