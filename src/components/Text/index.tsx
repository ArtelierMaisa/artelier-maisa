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
    toCenter = false,
    isInline = false,
    hoverColor = color,
    isCursorPointer = false,
    onClick,
  } = props;

  const textAlign = `text-${toCenter ? 'center' : 'left'}`;
  const display = `${isInline ? 'inline' : 'block'}`;
  const cursor = `cursor-${isCursorPointer ? 'pointer' : 'default'}`;

  return (
    <p
      className={`${display} ${textColors[color]} ${textWeights[type]} ${textSizes[size]} ${textAlign} ${textHoverColors[hoverColor]} ${cursor}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}
