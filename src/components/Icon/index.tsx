import {
  CaretDown,
  CaretLeft,
  CaretRight,
  Copyright,
  EnvelopeSimple,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MagnifyingGlass,
  SmileySad,
  WhatsappLogo,
  X,
} from '@phosphor-icons/react';

import { IconProps } from '../../@types';
import { iconColors, iconSizes } from '../../constants/components';

export function Icon(props: IconProps) {
  const {
    variant,
    color = 'background-color',
    size = 'x-small',
    isCursorPointer = false,
    onClick,
  } = props;

  const iconCommonProps = {
    color: iconColors[color],
    size: iconSizes[size],
    className: isCursorPointer ? 'cursor-pointer' : 'cursor-default',
    onClick,
  };

  const icons: Record<IconProps['variant'], JSX.Element> = {
    'caret-left': <CaretLeft {...iconCommonProps} />,
    'caret-right': <CaretRight {...iconCommonProps} />,
    'caret-down': <CaretDown {...iconCommonProps} />,
    'magnifying-glass': <MagnifyingGlass {...iconCommonProps} />,
    heart: <Heart {...iconCommonProps} weight='fill' />,
    'facebook-logo': <FacebookLogo {...iconCommonProps} />,
    'instagram-logo': <InstagramLogo {...iconCommonProps} />,
    'whatsapp-logo': <WhatsappLogo {...iconCommonProps} />,
    'envelope-simple': <EnvelopeSimple {...iconCommonProps} />,
    x: <X {...iconCommonProps} />,
    'smiley-sad': <SmileySad {...iconCommonProps} />,
    copyright: <Copyright {...iconCommonProps} />,
  };

  return icons[variant];
}
