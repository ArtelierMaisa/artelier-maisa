import { useState } from 'react';

import { SearchInputCategoryProps, SearchInputProps } from '../../@types';
import { GenericButton, Icon, Text } from '../';

export function SearchInput(props: SearchInputProps) {
  const { categories, searchValue, onChange, onSearch } = props;

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] =
    useState<SearchInputCategoryProps | null>(null);

  function onSelectCategory(category: SearchInputCategoryProps | null): void {
    setCategorySelected(category);
    setShowDropdown(false);
  }

  const renderCategoryDropdown: JSX.Element = (
    <div className='absolute top-[4.5rem] left-0 z-10 w-full sm:w-auto min-w-40 bg-primary rounded-lg dark:bg-primary shadow-default'>
      <ul className='py-2'>
        {categories.map(category => (
          <li key={category.id}>
            <button
              type='button'
              className='inline-flex w-full justify-center sm:justify-start cursor-pointer px-4 py-2 hover:transition-opacity hover:duration-300 hover:opacity-80 dark:hover:opacity-80'
              onClick={() => onSelectCategory(category)}
            >
              <Text color='background-color'>{category.name}</Text>
            </button>
          </li>
        ))}

        <li key='none'>
          <button
            type='button'
            className='inline-flex w-full justify-center sm:justify-start cursor-pointer px-4 py-2 hover:transition-opacity hover:duration-300 hover:opacity-80 dark:hover:opacity-80'
            onClick={() => onSelectCategory(null)}
          >
            <Text color='background-color'>Sem Categoria</Text>
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='flex flex-col w-full items-center gap-2'>
      <form className='w-full max-w-[46rem] rounded-lg sm:rounded-none shadow-default'>
        <div className='flex relative'>
          <button
            type='button'
            className='flex-shrink-0 z-10 min-w-40 hidden sm:inline-flex h-16 justify-center items-center gap-1 py-3 px-4 text-background-color bg-primary rounded-s-lg hover:opacity-90 dark:bg-primary dark:hover:opacity-90 dark:text-background-color'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Text type='medium' color='background-color'>
              {categorySelected ? categorySelected.name : 'Categorias'}
            </Text>

            <Icon variant='caret-down' color='background-color' />
          </button>

          <div className='hidden sm:flex'>
            {showDropdown && renderCategoryDropdown}
          </div>

          <div className='relative w-full'>
            <input
              value={searchValue}
              type='search'
              className='block w-full sm:w-96 md:w-[32rem] h-16 z-20 p-4 sm:p-2 sm:pr-16 rounded-lg sm:rounded-none bg-background-color text-primary font-normal text-base placeholder-primary60 border-transparent focus:border-transparent focus:ring-0 dark:bg-background-color dark:placeholder-primary60'
              placeholder='Buscar Produto'
              onChange={onChange}
              required
            />

            <button
              type='button'
              className='absolute top-0 end-0 hidden sm:flex w-16 h-16 justify-center items-center p-2 bg-primary rounded-e-lg hover:transition-opacity hover:duration-300 hover:opacity-90 dark:bg-primary dark:hover:opacity-90'
              onClick={onSearch}
            >
              <Icon variant='magnifying-glass' color='background-color' />

              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className='relative flex flex-col sm:hidden w-full gap-2'>
        <GenericButton
          title={categorySelected ? categorySelected.name : 'Categorias'}
          onClick={() => setShowDropdown(!showDropdown)}
          isHugWidth
        />

        {showDropdown && renderCategoryDropdown}

        <GenericButton title='Buscar' onClick={onSearch} isHugWidth />
      </div>
    </div>
  );
}
