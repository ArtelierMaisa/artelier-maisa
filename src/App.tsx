import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { Spinner } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <Spinner />
    </Flowbite>
  );
}

export default App;
