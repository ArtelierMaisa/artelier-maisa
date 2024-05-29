import { WhatsAppButtonProps } from '../../@types';
import { Icon, Text } from '../';

export function WhatsAppButton(props: WhatsAppButtonProps) {
  const { phone } = props;

  // TODO: Integration with WhatsApp API
  function handleWhatsApp(): void {
    console.log(phone);
  }

  return (
    <button
      type='button'
      className='flex flex-row gap-1 w-auto max-w-[32rem] h-16 p-5 bg-whatsapp text-white justify-center items-center rounded-lg hover:opacity-90 transition-colors duration-300'
      onClick={handleWhatsApp}
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
