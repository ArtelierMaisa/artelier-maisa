import { Navbar } from 'flowbite-react';
import { useState } from 'react';

import { HeaderLinkActiveType, HeaderProps, TextProps } from '../../@types';
import { PRIMARY_LOGO } from '../../config';
import { Text } from '../Text';

export function Header(props: HeaderProps) {
  const { linkActive } = props;

  const [currentLink, setCurrentLink] =
    useState<HeaderLinkActiveType>(linkActive);

  const commonTextProps: Omit<TextProps, 'children'> = {
    type: 'semibold',
    hoverColor: 'white',
  };

  return (
    <Navbar fluid rounded={false}>
      <Navbar.Brand href='#'>
        <img
          src={PRIMARY_LOGO}
          className='mr-3 w-16 h-16'
          alt='Artelier Maisa Logo'
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link
          href='#'
          active={currentLink === 'products'}
          onClick={() => setCurrentLink('products')}
        >
          <Text
            {...commonTextProps}
            color={currentLink === 'products' ? 'white' : 'background-color'}
          >
            Produtos
          </Text>
        </Navbar.Link>

        <Navbar.Link
          href='#'
          active={currentLink === 'about'}
          onClick={() => setCurrentLink('about')}
        >
          <Text
            {...commonTextProps}
            color={currentLink === 'about' ? 'white' : 'background-color'}
          >
            Sobre a Maisa
          </Text>
        </Navbar.Link>

        <Navbar.Link
          href='#'
          active={currentLink === 'events'}
          onClick={() => setCurrentLink('events')}
        >
          <Text
            {...commonTextProps}
            color={currentLink === 'events' ? 'white' : 'background-color'}
          >
            Divulgações
          </Text>
        </Navbar.Link>
      </Navbar.Collapse>

      <a href='#' className='flex flex-1 justify-end cursor-default'>
        <Text type='bold' color='white' size='xl' isCursorPointer>
          Artelier by Maisa
        </Text>
      </a>
    </Navbar>
  );
}
