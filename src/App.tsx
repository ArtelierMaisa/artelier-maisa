import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { UserProvider } from './contexts';
import { Router } from './routes';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <UserProvider>
      <Flowbite theme={{ theme: flowbiteTheme, mode: 'light' }}>
        <Router />
      </Flowbite>
    </UserProvider>
  );
}

export default App;
