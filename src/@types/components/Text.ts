import { textSizes, textWeights } from '../../constants';
import { Colors } from '../global';

export interface TextProps {
  children: React.ReactNode;
  type?: keyof typeof textWeights;
  color?: Colors;
  size?: keyof typeof textSizes;
  toCenter?: boolean;
  isInline?: boolean;
  hoverColor?: Colors;
  isCursorPointer?: boolean;
  isUnderlined?: boolean;
  onClick?(): void;
}
