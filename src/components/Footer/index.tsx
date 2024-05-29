import { Footer as FlowbiteFooter } from 'flowbite-react';

import packageJson from '../../../package.json';
import { IconProps } from '../../@types';
import { Icon, Text } from '../';

export function Footer() {
  const version = packageJson.version;
  const currentYear = new Date().getFullYear();

  const commonIconProps: Omit<IconProps, 'variant'> = {
    size: 'x-small',
    isCursorPointer: true,
  };

  // TODO: Integration with WhatsApp API
  function handleWhatsApp(): void {}

  return (
    <FlowbiteFooter container className='border-t border-primary'>
      <div className='flex flex-wrap'>
        <FlowbiteFooter.Copyright
          by='Artelier by Maisa™.'
          year={currentYear}
        />
        <div className='flex flex-row gap-1'>
          <Text type='semibold'>Todos os Direitos Revervados.</Text>

          <Text>Versão {version}.</Text>
        </div>
      </div>

      <div className='flex flex-wrap gap-1'>
        <Text>
          Plataforma desenvolvida em parceria com a{' '}
          <Text isInline isCursorPointer isUnderlined>
            <a
              className='w-full h-full'
              href='https://www.univali.br/'
              target='_blank'
            >
              Univali
            </a>
          </Text>
        </Text>

        <Icon variant='heart' color='alert' size='x-small' />

        <div className='flex gap-4 ml-3'>
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

          {/* TODO: Add WhatsApp of Maisa */}
          <Icon
            variant='whatsapp-logo'
            color='whatsapp'
            onClick={handleWhatsApp}
            {...commonIconProps}
          />

          {/* TODO: Add Real e-mail of Maisa  */}
          <a href='mailto:'>
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
