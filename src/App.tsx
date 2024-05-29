import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { Footer } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <Footer />
    </Flowbite>
  );
}

export default App;
