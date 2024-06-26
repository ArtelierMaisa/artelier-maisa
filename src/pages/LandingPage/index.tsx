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
  Spinner,
  Text,
} from '../../components';
import { PRIMARY_LOGO, SECONDARY_LOGO } from '../../config';
import { useUser } from '../../hooks';

export function LandingPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { about, highlights, banners, isLoaded } = useUser();
  const navigate = useNavigate();

  function navigateToProductPage(): void {
    navigate('/products');
  }

  return (
    <>
      <main className='flex flex-col flex-1 w-full h-screen'>
        <Header />

        {isLoaded ? (
          <>
            {banners.length > 0 && (
              <Carousel type='banner'>
                {banners.map(banner => (
                  <CarouselImage id={banner.id} uri={banner.image.uri} />
                ))}
              </Carousel>
            )}

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

            {highlights.length > 0 && (
              <Element name='events'>
                <Carousel type='event'>
                  {highlights.map(highlight => (
                    <CarouselEvent
                      key={highlight.id}
                      image={highlight.image.uri}
                      title={highlight.title}
                      description={highlight.description}
                    />
                  ))}
                </Carousel>
              </Element>
            )}

            <Element name='about'>
              <section className='flex flex-col mt-3 mb-6 bg-transparent'>
                <Text type='semibold' size='2xl' toCenter>
                  Sobre a Maisa
                </Text>

                <div className='flex flex-row flex-wrap justify-center items-center mt-8'>
                  <div className='flex flex-col w-full lg:w-1/3 justify-center items-center gap-4 lg:border-r-[1px] border-b-[1px] lg:border-b-0 border-r-primary border-b-primary px-8 pb-8 lg:pb-0 py-2'>
                    <img
                      src={about?.uri}
                      alt={`Foto de ${about?.name}`}
                      className='w-60 h-60 rounded-full shadow-default object-cover'
                    />

                    <Text type='medium' size='xl' toCenter>
                      {about?.name}
                    </Text>

                    {about?.additional && (
                      <Text type='medium' toCenter>
                        {about.additional}
                      </Text>
                    )}
                  </div>

                  <div className='flex flex-col w-full lg:w-2/3 justify-center items-center px-8 pt-8 lg:pt-0 py-2'>
                    <Text type='medium' toCenter>
                      {about?.description}
                    </Text>
                  </div>
                </div>
              </section>
            </Element>
          </>
        ) : (
          <div className='flex flex-col w-full h-full gap-2 justify-center items-center'>
            <Text color='primary' type='medium' toCenter>
              Preparando algo especial para você...
            </Text>

            <Spinner />
          </div>
        )}

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
