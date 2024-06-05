import { useState } from 'react';

import {
  Footer,
  Header,
  Icon,
  Modal,
  ProductCard,
  SearchInput,
  Text,
} from '../../components';
import { PRIMARY_LOGO, SECONDARY_LOGO } from '../../config';

export function Products() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const products = [0];

  // TODO: create search products this function
  function handleSearchProducts(): void {
    setSearchValue('');
  }

  return (
    <>
      <main className='relative flex flex-col flex-1 w-full h-screen'>
        <Header />

        <div className='flex w-full h-auto justify-center px-4 my-8 md:mt-10 md:mb-12'>
          <SearchInput
            searchValue={searchValue}
            categories={[
              { id: '123', name: 'Madeira' },
              { id: '456', name: 'Tecido' },
            ]}
            onChange={event => setSearchValue(event.target.value)}
            onSearch={handleSearchProducts}
          />
        </div>

        {products.length ? (
          <div className='flex flex-row flex-1 flex-wrap mb-12 px-4 md:px-8 gap-4 md:gap-8 justify-center items-center'>
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
        ) : (
          <div className='flex flex-col flex-1 w-full h-full justify-center items-center m-auto p-12 gap-1'>
            <Text type='medium' size='xl' color='primary' toCenter>
              Não há produtos disponíveis hoje!
            </Text>

            <Icon variant='smiley-sad' color='primary' size='medium' />
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
