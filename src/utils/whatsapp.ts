import { sendMessageProps } from "../@types";
import { DEFAULT_PHONE } from "../config";

export function sendMessage(props: sendMessageProps) {
  const {
    type = 'whatsapp-button',
    phone = DEFAULT_PHONE,
    product
  } = props;

  const productName = product ? `${product} ` : '';

  const messages: Record<Required<sendMessageProps>['type'], string> = {
    'footer': "Olá, estava olhando o seu site e resolvi entrar em contato, pois, tenho interesse nos seus produtos!",
    'whatsapp-button': `Olá, estou interresado(a) no produto ${productName}que achei no seu site, gostaria de conversar sobre ele.`
  }

  const message = messages[type];

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return url;
}