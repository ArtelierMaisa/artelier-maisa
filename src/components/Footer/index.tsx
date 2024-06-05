import { Footer as FlowbiteFooter } from 'flowbite-react';

import packageJson from '../../../package.json';
import { IconProps } from '../../@types';
import { DEFAULT_EMAIL } from '../../config';
import { sendMessage } from '../../utils';
import { Icon, Text } from '../';

export function Footer() {
  const version = packageJson.version;
  const currentYear = new Date().getFullYear();

  const commonIconProps: Omit<IconProps, 'variant'> = {
    size: 'x-small',
    isCursorPointer: true,
  };

  function onSendWhatsAppMessage(): void {
    window.open(sendMessage({ type: 'footer' }));
  }

  return (
    <FlowbiteFooter container className='border-t border-primary'>
      <div className='flex flex-1 flex-wrap justify-center md:justify-start items-center pb-0 sm:pb-2 md:pb-0 gap-1'>
        <FlowbiteFooter.Copyright
          by='Artelier by Maisa™.'
          year={currentYear}
        />

        <div className='flex flex-col sm:flex-row items-center sm:items-center gap-1'>
          <Text type='semibold'>Todos os Direitos Revervados.</Text>

          <Text>Versão {version}.</Text>
        </div>
      </div>

      <div className='flex flex-1 flex-wrap gap-1 justify-center items-center md:justify-end'>
        <Text className='text-center sm:text-right'>
          Plataforma desenvolvida em parceria com a{' '}
          <span className='inline-flex justify-center items-center text-base text-text font-normal gap-1'>
            <a
              className='cursor-pointer underline'
              href='https://www.univali.br/'
              target='_blank'
            >
              Univali
            </a>

            <Icon variant='heart' color='alert' size='x-small' />
          </span>
        </Text>

        <div className='flex gap-4 sm:ml-3 sm:justify-center'>
          <a href='https://www.facebook.com/artelier.maisa/' target='_blank'>
            <Icon
              variant='facebook-logo'
              color='facebook'
              {...commonIconProps}
            />
          </a>

          <a href='https://www.instagram.com/arteliermaisa/' target='_blank'>
            <Icon variant='instagram-logo' color='text' {...commonIconProps} />
          </a>

          <Icon
            variant='whatsapp-logo'
            color='whatsapp'
            onClick={onSendWhatsAppMessage}
            {...commonIconProps}
          />

          <a
            href={`mailto:${DEFAULT_EMAIL}?subject=Tenho interesse nos seus produtos!&body=Olá, tudo bem? Espero que sim! Estava olhando o seu site e resolvi entrar em contato, tenho interesse em seus produtos.`}
          >
            <Icon
              variant='envelope-simple'
              color='email'
              {...commonIconProps}
            />
          </a>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
