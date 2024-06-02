import { TextProps } from '../../@types';
import {
  textColors,
  textHoverColors,
  textSizes,
  textWeights,
} from '../../constants';

export function Text(props: TextProps) {
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

  const textDisplays: Record<Required<TextProps>['display'], string> = {
    'inline-flex': 'inline-flex',
    block: 'block',
    inline: 'inline',
  };

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
