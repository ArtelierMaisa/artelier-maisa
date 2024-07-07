import { BuildWhatsAppUrlProps } from '../@types';
import { DEFAULT_PHONE } from '../config';

export function buildWhatsAppUrl(props: BuildWhatsAppUrlProps) {
  const { message, phone = DEFAULT_PHONE } = props;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
