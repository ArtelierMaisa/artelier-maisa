export type WhatsAppButtonPropsType = 'footer' | 'whatsapp-button';

export interface WhatsAppButtonProps {
  type?: WhatsAppButtonPropsType,
  phone?: string;
  product?: string;
}