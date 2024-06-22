import {
  CarouselButtonProps,
  CarouselButtonType,
  IconProps,
} from '../../@types';
import { Icon } from '../Icon';

export function CarouselButton(props: CarouselButtonProps) {
  const { type } = props;

  const isNext = type === 'next';

  const iconCommonProps: Omit<IconProps, 'variant'> = {
    color: 'background-color',
    size: 'x-small',
  };

  const icons: Record<CarouselButtonType, React.JSX.Element> = {
    next: <Icon variant='caret-left' {...iconCommonProps} />,
    previous: <Icon variant='caret-right' {...iconCommonProps} />,
  };

  return (
    <>
      <span className='inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-primary60 group-focus:outline-none'>
        {icons[type]}

        <span className='sr-only'>{isNext ? 'Próximo' : 'Anterior'}</span>
      </span>
    </>
  );
}
