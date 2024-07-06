import { Navbar } from 'flowbite-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import { LanguageType, TextProps } from '../../@types';
import { BRAZIL, PRIMARY_LOGO, UNITED_STATES } from '../../config';
import { useScrollTop, useUser } from '../../hooks';
import { Text, Translator } from '../';

function Header() {
  const { highlights } = useUser();
  const { handleTo, to } = useScrollTop();
  const { i18n, t } = useTranslation();

  async function handleChangeLanguage(language: LanguageType): Promise<void> {
    await i18n.changeLanguage(language);
  }

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
          alt={t('header.logo')}
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link active={isProducts} onClick={() => handleTo('products')}>
          <Text
            color={isProducts ? 'white' : 'background-color'}
            {...commonTextProps}
          >
            <Translator path='header.productsPage' />
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
            <Translator path='header.aboutSection' />
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
              <Translator path='header.eventsSection' />
            </Text>
          </Link>
        )}
      </Navbar.Collapse>

      <div className='flex flex-1 justify-end items-center gap-1'>
        <div className='flex mx-6 gap-1'>
          <button
            type='button'
            className='w-10 h-5 overflow-hidden rounded hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring focus:ring-primary focus:border-primary'
            onClick={async () => await handleChangeLanguage('pt-BR')}
          >
            <img
              src={BRAZIL}
              alt={t('header.brazil')}
              className='w-full h-full object-contain'
            />
          </button>

          <button
            type='button'
            className='w-10 h-5 overflow-hidden rounded hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring focus:ring-primary focus:border-primary'
            onClick={async () => await handleChangeLanguage('en-US')}
          >
            <img
              src={UNITED_STATES}
              alt={t('header.unitedStates')}
              className='w-full h-full object-contain'
            />
          </button>
        </div>

        <a onClick={() => handleTo(null)}>
          <Text type='bold' color='white' size='xl' isCursorPointer>
            <Translator path='header.artelierByMaisa' />
          </Text>
        </a>
      </div>
    </Navbar>
  );
}

export default memo(Header);
