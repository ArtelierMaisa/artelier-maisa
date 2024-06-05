import { WhatsAppButtonProps } from '../components';

export type SendMessageType = 'footer' | 'whatsapp-button';
export interface SendMessageProps extends Partial<WhatsAppButtonProps> {
  type?: SendMessageType;
}
