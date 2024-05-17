export const weights = {
  regular: 'font-regular',
  medium: 'font-medium',
  bold: 'font-bold',
  semibold: 'font-semibold'
}

export const sizes = {
  'sm': 'text-sm',
  'base': 'text-base',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
}

export interface TextProps {
  type: keyof typeof weights;
  color?: string;
  size: keyof typeof sizes;
  toCenter: boolean;
  children: React.ReactNode
}