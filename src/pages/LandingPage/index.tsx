import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

import { Product, ProductProps } from '../../@types';
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
import { useUser } from '../../hooks';

export function LandingPage() {
  const [productSelected, setProductSelected] = useState<Product | null>(null);

  const { about, highlights, banners, products, isLoaded } = useUser();
  const navigate = useNavigate();

  function navigateToProductsPage(): void {
    navigate('/products');
  }

  const [firstProduct, secondProduct, threeProduct] = products;
  const firstThreeProducts = [firstProduct, secondProduct, threeProduct].filter(
    product => product,
  );
  const productUsedByModal: ProductProps = productSelected
    ? { ...productSelected, title: productSelected.name }
    : ({} as ProductProps);

  return (
    <>
      <main className='flex flex-col flex-1 w-full h-screen'>
        <Header />

        {isLoaded ? (
          <>
            {banners.length > 0 && (
              <Carousel type='banner'>
                {banners.map(banner => (
                  <CarouselImage
                    key={banner.id}
                    uri={banner.image.uri}
                    name={banner.image.name}
                  />
                ))}
              </Carousel>
            )}

            {firstThreeProducts.length > 0 && (
              <section className='flex flex-col w-full justify-center items-center mb-4 py-10 px-4 gap-8 bg-primary'>
                <div className='flex flex-row flex-wrap w-full justify-center items-center gap-4'>
                  {firstThreeProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      image={product.images[0].uri}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      onSeeMore={() => setProductSelected(product)}
                    />
                  ))}
                </div>

                <GenericButton
                  title='Conheça Nossos Produtos'
                  variant='secondary'
                  onClick={navigateToProductsPage}
                />
              </section>
            )}

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
                      alt={about?.name}
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
        isOpen={!!productSelected}
        onClose={() => setProductSelected(null)}
        product={productUsedByModal}
      />
    </>
  );
}
