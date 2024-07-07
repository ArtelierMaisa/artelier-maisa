import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { GenericButton, Text, Translator } from '../../components';
import { PRIMARY_LOGO } from '../../config';

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function navigateToLandingPage(): void {
    navigate('/');
  }

  return (
    <div className='flex flex-row w-full h-screen'>
      <aside className='hidden lg:flex flex-col flex-1 justify-center items-center bg-primary p-8 xl:px-32 gap-8'>
        <img
          src={PRIMARY_LOGO}
          alt={t('notFound.logo')}
          className='w-40 h-40'
        />

        <Text type='semibold' size='4xl' color='background-color' toCenter>
          <Translator path='notFound.title' />
        </Text>

        <Text type='medium' size='xl' color='background-color' toCenter>
          <Translator path='notFound.subtitle' />
        </Text>
      </aside>

      <main className='flex flex-col flex-1 justify-center items-center bg-background-color p-8 md:px-16 xl:px-32 gap-8'>
        <Text type='medium' size='xl' color='primary' toCenter>
          <Translator path='notFound.description' />
        </Text>

        <GenericButton
          title={t('notFound.buttonTitle')}
          onClick={navigateToLandingPage}
        />
      </main>
    </div>
  );
}
