import { TextProps } from '../../@types';

export const textColors: Record<Required<TextProps>['color'], string> = {
  white: 'text-white',
  white90: 'text-white90',
  white60: 'text-white60',
  text: 'text-text',
  text85: 'text-text85',
  text50: 'text-text50',
  'background-color': 'text-background-color',
  primary: 'text-primary',
  primary60: 'text-primary60',
  alert: 'text-alert',
  warning: 'text-warning',
  whatsapp: 'text-whatsapp',
  facebook: 'text-facebook',
  email: 'text-email',
};

export const textWeights = {
  regular: 'font-regular',
  medium: 'font-medium',
  bold: 'font-bold',
  semibold: 'font-semibold',
};

export const textSizes = {
  sm: 'text-sm',
  base: 'text-base',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
};
