import { Colors } from '../global';

export type IconVariant =
  | 'caret-left'
  | 'caret-right'
  | 'caret-down'
  | 'magnifying-glass'
  | 'copyright'
  | 'heart'
  | 'facebook-logo'
  | 'instagram-logo'
  | 'whatsapp-logo'
  | 'envelope-simple'
  | 'x'
  | 'smiley-sad';

export type IconSize = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

export interface IconProps {
  variant: IconVariant;
  color?: Colors;
  size?: IconSize;
}
