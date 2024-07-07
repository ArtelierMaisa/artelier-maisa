import './styles/global.scss';

import { Flowbite } from 'flowbite-react';
import { Toaster } from 'sonner';

import { UserProvider } from './contexts';
import { Router } from './routes';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <UserProvider>
      <Toaster
        position='bottom-right'
        duration={5000}
        closeButton
        richColors
        expand
      />

      <Flowbite theme={{ theme: flowbiteTheme, mode: 'light' }}>
        <Router />
      </Flowbite>
    </UserProvider>
  );
}

export default App;
