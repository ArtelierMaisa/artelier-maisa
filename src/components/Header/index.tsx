import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

import { HeaderLinkActiveType, HeaderProps, TextProps } from '../../@types';
import { PRIMARY_LOGO } from '../../config';
import { Text } from '../Text';

export function Header(props: HeaderProps) {
  const { linkActive } = props;

  const navigate = useNavigate();

  const [currentLink, setCurrentLink] =
    useState<HeaderLinkActiveType>(linkActive);

  const commonTextProps: Omit<TextProps, 'children'> = {
    type: 'semibold',
    hoverColor: 'white',
    isCursorPointer: true,
  };

  function handleCurrentLink(link: HeaderLinkActiveType): void {
    setCurrentLink(link);
    navigate(link === 'products' ? '/products' : '/');
  }

  const isAbout = currentLink === 'about';
  const isEvents = currentLink === 'events';
  const isProducts = currentLink === 'products';

  return (
    <Navbar fluid rounded={false}>
      <Navbar.Brand onClick={() => handleCurrentLink(null)}>
        <img
          src={PRIMARY_LOGO}
          className='mr-3 w-16 h-16 cursor-pointer'
          alt='Artelier Maisa Logo'
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link
          active={isProducts}
          onClick={() => handleCurrentLink('products')}
        >
          <Text
            color={isProducts ? 'white' : 'background-color'}
            {...commonTextProps}
          >
            Produtos
          </Text>
        </Navbar.Link>

        <Link
          to='about'
          smooth
          spy
          duration={750}
          className='w-auto h-full'
          onClick={() => handleCurrentLink('about')}
        >
          <Text
            color={isAbout ? 'white' : 'background-color'}
            {...commonTextProps}
          >
            Sobre a Maisa
          </Text>
        </Link>

        <Link
          to='events'
          smooth
          spy
          duration={500}
          className='w-auto h-full'
          onClick={() => handleCurrentLink('events')}
        >
          <Text
            color={isEvents ? 'white' : 'background-color'}
            {...commonTextProps}
          >
            Divulgações
          </Text>
        </Link>
      </Navbar.Collapse>

      <a
        className='flex flex-1 justify-end cursor-default'
        onClick={() => handleCurrentLink(null)}
      >
        <Text type='bold' color='white' size='xl' isCursorPointer>
          Artelier by Maisa
        </Text>
      </a>
    </Navbar>
  );
}
