import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { SearchInput } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <SearchInput
        categories={[
          { id: '123', name: 'Madeira' },
          { id: '456', name: 'Tecido' },
        ]}
      />
    </Flowbite>
  );
}

export default App;
