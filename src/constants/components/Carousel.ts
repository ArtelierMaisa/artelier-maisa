import { CarouselType } from '../../@types';

export const carouselHeights: Record<CarouselType, string> = {
  banner:
    '2xl:h-[38rem] 2xl:min-h-[38rem] xl:h-[32rem] xl:min-h-[32rem] sm:h-96 sm:min-h-96 h-[20rem] min-h-[20rem]',
  product: 'xl:h-[22rem] md:h-80 sm:h-72 h-60',
  event: '2xl:h-[38rem] xl:h-[32rem] sm:h-96 h-[20rem]',
};
