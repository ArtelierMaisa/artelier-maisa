import './styles/global.scss';

import { Flowbite } from 'flowbite-react';

import { Carousel, Header } from './components';
import { flowbiteTheme } from './styles';

function App() {
  return (
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <Header linkActive={'products'} />

      <Carousel
        type='banner'
        images={[
          {
            id: '1234567890',
            url: 'https://randompicturegenerator.com/img/cat-generator/g0d2808031377ed21c5fa2ff78c52c8d789a2d87e964c8a4aa3edc9c3ba0ca51ea12d595149313fbf31af99e29744a0f9_640.jpg',
          },
          {
            id: '0987654321',
            url: 'https://randompicturegenerator.com/img/cat-generator/g247b8d5c40ac0a9ba125c3e2377ad3e17d9d7749225aa21b744173c6e48ef6c63b15446b869d93f854d37bc778daf783_640.jpg',
          },
        ]}
      />
    </Flowbite>
  );
}

export default App;
