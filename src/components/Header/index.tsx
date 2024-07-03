import { Navbar } from 'flowbite-react';
import { memo } from 'react';
import { Link } from 'react-scroll';

import { TextProps } from '../../@types';
import { PRIMARY_LOGO } from '../../config';
import { useScrollTop, useUser } from '../../hooks';
import { Text } from '../';

function Header() {
  const { highlights } = useUser();
  const { handleTo, to } = useScrollTop();

  const commonTextProps: Omit<TextProps, 'children'> = {
    type: 'semibold',
    hoverColor: 'white',
    isCursorPointer: true,
  };

  const isAbout = to === 'about';
  const isEvents = to === 'events';
  const isProducts = to === 'products';

  return (
    <Navbar fluid rounded={false}>
      <Navbar.Brand onClick={() => handleTo(null)}>
        <img
          src={PRIMARY_LOGO}
          className='mr-3 w-16 h-16 cursor-pointer'
          alt='Artelier Maisa Logo'
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link active={isProducts} onClick={() => handleTo('products')}>
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
          delay={100}
          duration={750}
          className='w-auto h-full'
          onClick={() => handleTo('about')}
        >
          <Text
            color={isAbout ? 'white' : 'background-color'}
            {...commonTextProps}
          >
            Sobre a Maisa
          </Text>
        </Link>

        {highlights.length > 0 && (
          <Link
            to='events'
            smooth
            spy
            delay={100}
            duration={500}
            onClick={() => handleTo('events')}
          >
            <Text
              color={isEvents ? 'white' : 'background-color'}
              {...commonTextProps}
            >
              Divulgações
            </Text>
          </Link>
        )}
      </Navbar.Collapse>

      <a
        className='flex flex-1 justify-end cursor-default'
        onClick={() => handleTo(null)}
      >
        <Text type='bold' color='white' size='xl' isCursorPointer>
          Artelier by Maisa
        </Text>
      </a>
    </Navbar>
  );
}

export default memo(Header);
