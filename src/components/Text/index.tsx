import { memo } from 'react';

import { TextProps } from '../../@types';
import {
  textColors,
  textDisplays,
  textHoverColors,
  textSizes,
  textWeights,
} from '../../constants';

function Text(props: TextProps) {
  const {
    children,
    type = 'regular',
    color = 'text',
    size = 'base',
    display = 'block',
    toCenter = false,
    hoverColor = color,
    isCursorPointer = false,
    isUnderlined = false,
    className,
    onClick,
  } = props;

  const textAlign = `text-${toCenter ? 'center' : 'left'}`;
  const cursor = isCursorPointer ? 'cursor-pointer' : '';
  const underline = isUnderlined ? 'underline' : '';

  return (
    <p
      className={`${textDisplays[display]} ${textColors[color]} ${textWeights[type]} ${textSizes[size]} ${textAlign} ${textHoverColors[hoverColor]} ${cursor} ${underline} ${className}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

export default memo(Text);
