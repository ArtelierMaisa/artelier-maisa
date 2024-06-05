import { SendMessageProps } from '../@types';
import { DEFAULT_PHONE } from '../config';

export function sendMessage(props: SendMessageProps) {
  const { type = 'whatsapp-button', phone = DEFAULT_PHONE, product } = props;

  const productName = product ? `"${product}" ` : '';

  const messages: Record<Required<SendMessageProps>['type'], string> = {
    footer:
      'Olá, estava olhando o seu site e resolvi entrar em contato. Tenho interesse em seus produtos!',
    'whatsapp-button': `Olá, estou interresado(a) no produto ${productName}que achei no seu site, gostaria de conversar sobre ele.`,
  };

  return `https://wa.me/${phone}?text=${encodeURIComponent(messages[type])}`;
}
