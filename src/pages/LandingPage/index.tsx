import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

import {
  Carousel,
  CarouselEvent,
  CarouselImage,
  Footer,
  GenericButton,
  Header,
  Modal,
  ProductCard,
  Text,
} from '../../components';
import { PRIMARY_LOGO, SECONDARY_LOGO } from '../../config';

export function LandingPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  function navigateToProductPage(): void {
    navigate('/products');
  }

  return (
    <>
      <main className='flex flex-col flex-1 w-full h-auto'>
        <Header />

        <Carousel type='banner'>
          <CarouselImage id='123' uri={PRIMARY_LOGO} />

          <CarouselImage id='456' uri={SECONDARY_LOGO} />
        </Carousel>

        <section className='flex flex-col w-full justify-center items-center mb-4 py-10 px-4 gap-8 bg-primary'>
          <div className='flex flex-row flex-wrap w-full justify-center items-center gap-4'>
            <ProductCard
              id='123'
              image={PRIMARY_LOGO}
              name='Lorem ipsum dolor'
              price='R$ 49,90'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!'
              onSeeMore={() => setIsOpen(true)}
            />

            <ProductCard
              id='456'
              image={SECONDARY_LOGO}
              name='Lorem ipsum dolor'
              price='R$ 49,90'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!'
              onSeeMore={() => setIsOpen(true)}
            />

            <ProductCard
              id='789'
              image={PRIMARY_LOGO}
              name='Lorem ipsum dolor'
              price='R$ 49,90'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!'
              onSeeMore={() => setIsOpen(true)}
            />
          </div>

          <GenericButton
            title='Conheça Nossos Produtos'
            variant='secondary'
            onClick={navigateToProductPage}
          />
        </section>

        <Element name='events'>
          <Carousel type='event'>
            <CarouselEvent
              id='123'
              image={PRIMARY_LOGO}
              title='Lorem ipsum dolor sit'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!'
            />

            <CarouselEvent
              id='456'
              image={SECONDARY_LOGO}
              title='Lorem ipsum dolor sit'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!'
            />
          </Carousel>
        </Element>

        <Element name='about'>
          <section className='flex flex-col mt-3 mb-6 bg-transparent'>
            <Text type='semibold' size='2xl' toCenter>
              Sobre a Maisa
            </Text>

            <div className='flex flex-row flex-wrap justify-center items-center mt-8'>
              <div className='flex flex-col w-full lg:w-1/3 justify-center items-center gap-4 lg:border-r-[1px] border-b-[1px] lg:border-b-0 border-r-primary border-b-primary px-8 pb-8 lg:pb-0 py-2'>
                <img
                  src={PRIMARY_LOGO}
                  alt='Foto da Maisa'
                  className='w-60 h-60 rounded-full shadow-default'
                />

                <Text type='medium' size='xl' toCenter>
                  Artelier Maisa Furlin
                </Text>

                <Text type='medium' toCenter>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
                  do eiusm od tempor incididunt ut labore et dolore magna
                  aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla
                  facilisi.
                </Text>
              </div>

              <div className='flex flex-col w-full lg:w-2/3 justify-center items-center px-8 pt-8 lg:pt-0 py-2'>
                <Text type='medium' toCenter>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Malesuada proin libero nunc consequat interdum varius sit
                  amet. Pretium fusce id velit ut tortor pretium viverra
                  suspendisse. Etiam non quam lacus suspendisse. Eros donec ac
                  odio tempor orci dapibus. Eget egestas purus viverra accumsan
                  in nisl nisi scelerisque. Felis imperdiet proin fermentum leo
                  vel orci porta non pulvinar. Quis varius quam quisque id diam.
                  Euismod quis viverra nibh cras pulvinar mattis nunc. Lobortis
                  feugiat vivamus at augue eget arcu dictum. Enim sit amet
                  venenatis urna cursus eget nunc scelerisque viverra. A lacus
                  vestibulum sed arcu non odio euismod lacinia at. Neque
                  volutpat ac tincidunt vitae semper quis lectus nulla. Et
                  malesuada fames ac turpis egestas sed tempus urna. Sit amet
                  consectetur adipiscing elit pellentesque habitant morbi
                  tristique senectus. Mauris nunc congue nisi vitae suscipit
                  tellus. Morbi tristique senectus et netus et malesuada fames
                  ac. Id diam maecenas ultricies mi eget. Et leo duis ut diam
                  quam nulla porttitor massa. Fermentum posuere urna nec
                  tincidunt praesent semper. Eget egestas purus viverra accumsan
                  in nisl nisi scelerisque. Felis imperdiet proin fermentum leo
                  vel orci porta non pulvinar. Quis varius quam quisque id diam.
                  Euismod quis viverra nibh cras pulvinar mattis nunc. Lobortis
                  feugiat vivamus at augue eget arcu dictum. Enim sit amet
                  venenatis urna cursus eget nunc scelerisque viverra. A lacus
                  vestibulum sed arcu non odio euismod lacinia at.
                </Text>
              </div>
            </div>
          </section>
        </Element>

        <Footer />
      </main>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={{
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi sit soluta, similique amet molestias tenetur dolorem non unde temporibus aut numquam nesciunt enim nisi nobis qui, officiis laudantium! Unde!',
          id: '123',
          images: [
            { id: '123', uri: PRIMARY_LOGO },
            { id: '456', uri: SECONDARY_LOGO },
          ],
          price: 'R$ 49,90',
          size: '20cmx15cm',
          title: 'Enfeite de Páscoa',
          weight: '50kg',
          material: 'Madeira',
          whatsapp: '5547996507698',
        }}
      />
    </>
  );
}
