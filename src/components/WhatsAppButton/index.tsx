import { memo } from 'react';

import { WhatsAppButtonProps } from '../../@types';
import { DEFAULT_PHONE } from '../../config';
import { buildWhatsAppUrl } from '../../utils';
import { Icon, Text } from '../';

function WhatsAppButton(props: WhatsAppButtonProps) {
  const { product, phone = DEFAULT_PHONE } = props;

  function onSendWhatsAppMessage(): void {
    window.open(
      buildWhatsAppUrl({
        phone,
        message: `Olá, estou interresado(a) no produto "${product}" que achei no seu site, gostaria de conversar sobre ele.`,
      }),
    );
  }

  return (
    <button
      type='button'
      className='flex flex-row gap-1 w-auto max-w-[32rem] h-16 p-5 bg-whatsapp text-white justify-center items-center cursor-pointer rounded-lg hover:opacity-90 transition-colors duration-300 focus:outline-none focus:ring focus:ring-whatsapp focus:border-whatsapp'
      onClick={onSendWhatsAppMessage}
    >
      <Text
        type='medium'
        color='white'
        className='text-base md:text-xl'
        toCenter
      >
        Entrar em Contanto via WhatsApp
      </Text>

      <Icon variant='whatsapp-logo' size='small' color='white' />
    </button>
  );
}

export default memo(WhatsAppButton);
