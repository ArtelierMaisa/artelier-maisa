import { useCallback, useEffect, useState } from 'react';

import {
  Category,
  Product,
  ProductProps,
  SearchInputCategoryProps,
} from '../../@types';
import {
  Footer,
  Header,
  Icon,
  Modal,
  ProductCard,
  SearchInput,
  Spinner,
  Text,
  Translator,
} from '../../components';
import { useUser } from '../../hooks';

export function Products() {
  const { categories, products: productsFirebase, isLoaded } = useUser();

  const [searchValue, setSearchValue] = useState<string>('');
  const [products, setProducts] = useState<Product[]>(productsFirebase);
  const [productSelected, setProductSelected] = useState<Product | null>(null);
  const [categorySelected, setCategorySelected] = useState<Category | null>(
    null,
  );

  const handleSearchProducts = useCallback(() => {
    const allProductsOfTheCategory = categorySelected
      ? productsFirebase.filter(
          product => product.categoryId === categorySelected.id,
        )
      : productsFirebase;

    const productsSelected = searchValue.trim()
      ? allProductsOfTheCategory.filter(product =>
          product.name
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()),
        )
      : allProductsOfTheCategory;

    setProducts(productsSelected);
  }, [categorySelected, productsFirebase, searchValue]);

  function handleSelectCategory(
    category: SearchInputCategoryProps | null,
  ): void {
    if (!category) return setCategorySelected(null);

    const foundCategory = categories.find(({ id }) => id === category.id);
    if (!foundCategory) return setCategorySelected(null);
    setCategorySelected(foundCategory);
  }

  const productUsedByModal: ProductProps = productSelected
    ? { ...productSelected, title: productSelected.name }
    : ({} as ProductProps);

  useEffect(() => {
    if (!searchValue) handleSearchProducts();
  }, [searchValue, productsFirebase, handleSearchProducts]);

  return (
    <>
      <main className='relative flex flex-col flex-1 w-full h-screen'>
        <Header />

        <div className='flex w-full h-auto justify-center px-4 my-8 md:mt-10 md:mb-12'>
          <SearchInput
            searchValue={searchValue}
            categories={categories}
            onChange={event => setSearchValue(event.target.value)}
            onSelect={handleSelectCategory}
            onSearch={handleSearchProducts}
          />
        </div>

        {isLoaded ? (
          <>
            {products.length > 0 ? (
              <div className='flex flex-row flex-1 flex-wrap mb-12 px-4 md:px-8 gap-4 md:gap-8 justify-center items-center'>
                {products.map(product => (
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
            ) : (
              <div className='flex flex-col flex-1 w-full h-full justify-center items-center m-auto p-12 gap-1'>
                <Text type='medium' size='xl' color='primary' toCenter>
                  <Translator path='products.noProductsAvailable' />
                </Text>

                <Icon variant='smiley-sad' color='primary' size='medium' />
              </div>
            )}
          </>
        ) : (
          <div className='flex flex-col w-full h-full gap-2 justify-center items-center'>
            <Text color='primary' type='medium' toCenter>
              <Translator path='products.loading' />
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
