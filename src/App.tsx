import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { GenericButton } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <GenericButton title='Clique aqui!' />
    </Flowbite>
  );
}

export default App;
