import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { flowbiteTheme } from './styles';

function App() {
  return <Flowbite theme={{ theme: flowbiteTheme }}></Flowbite>;
}

export default App;
