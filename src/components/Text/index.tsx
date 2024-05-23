import { TextProps } from '../../@types';
import { textSizes, textWeights } from '../../constants';

export function Text(props: TextProps) {
  const {
    children,
    type = 'regular',
    color = 'text',
    size = 'base',
    toCenter = false,
  } = props;

  return (
    <p
      className={`text-${color} ${textWeights[type]} ${textSizes[size]} text-${toCenter ? 'center' : 'left'}`}
    >
      {children}
    </p>
  );
}
