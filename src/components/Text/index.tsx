import { TextProps } from '../../@types';
import { textSizes, textWeights } from '../../constants';

export function Text(props: TextProps) {
  const {
    children,
    type = 'regular',
    color = '#252527',
    size = 'base',
    toCenter = false,
  } = props;

  return (
    <p
      className={`${textWeights[type]} ${textSizes[size]} ${toCenter ? 'text-center' : ''}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}
