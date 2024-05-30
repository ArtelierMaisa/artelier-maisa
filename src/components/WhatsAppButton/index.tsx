import { WhatsAppButtonProps } from '../../@types';
import { DEFAULT_PHONE } from '../../config';
import { sendMessage } from '../../utils';
import { Icon, Text } from '../';

export function WhatsAppButton(props: WhatsAppButtonProps) {
  const { product, phone = DEFAULT_PHONE } = props;

  function onSendWhatsAppMessage(): void {
    window.open(sendMessage({ phone, product }));
  }

  return (
    <button
      type='button'
      className='flex flex-row gap-1 w-auto max-w-[32rem] h-16 p-5 bg-whatsapp text-white justify-center items-center rounded-lg hover:opacity-90 transition-colors duration-300'
      onClick={onSendWhatsAppMessage}
    >
      <Text type='medium' color='white' size='xl' isCursorPointer>
        Entrar em Contanto via WhatsApp
      </Text>

      <Icon
        variant='whatsapp-logo'
        size='small'
        color='white'
        isCursorPointer
      />
    </button>
  );
}
