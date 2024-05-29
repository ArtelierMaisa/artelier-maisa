import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { WhatsAppButton } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <WhatsAppButton phone='+55 (47) 9 9999-9999' />
    </Flowbite>
  );
}

export default App;
