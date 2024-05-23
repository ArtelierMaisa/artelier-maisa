import { TextProps } from '../../@types';
import { textColors, textSizes, textWeights } from '../../constants';

export function Text(props: TextProps) {
  const {
    children,
    type = 'regular',
    color = 'text',
    size = 'base',
    toCenter = false,
    isInline = false,
  } = props;

  const textAlign = `text-${toCenter ? 'center' : 'left'}`;
  const display = `${isInline ? 'inline' : 'block'}`;

  return (
    <p
      className={`${display} ${textColors[color]} ${textWeights[type]} ${textSizes[size]} ${textAlign}`}
    >
      {children}
    </p>
  );
}
