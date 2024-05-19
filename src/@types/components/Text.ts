import { textSizes, textWeights } from '../../constants';

export interface TextProps {
  children: React.ReactNode;
  type?: keyof typeof textWeights;
  color?: string;
  size?: keyof typeof textSizes;
  toCenter?: boolean;
}
