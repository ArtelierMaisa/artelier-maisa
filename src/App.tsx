import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { Router } from './routes';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme, mode: 'light' }}>
      <Router />
    </Flowbite>
  );
}

export default App;
