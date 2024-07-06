import { FormEvent, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInputCategoryProps, SearchInputProps } from '../../@types';
import { GenericButton, Icon, Text, Translator } from '../';

function SearchInput(props: SearchInputProps) {
  const { categories, searchValue, onChange, onSelect, onSearch } = props;

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] =
    useState<SearchInputCategoryProps | null>(null);

  const { t } = useTranslation();

  function onSelectCategory(category: SearchInputCategoryProps | null): void {
    setCategorySelected(category);

    if (onSelect) onSelect(category);
    setShowDropdown(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (onSearch) onSearch();
  }

  const renderCategoryDropdown: React.JSX.Element = (
    <div className='absolute top-[4.5rem] left-0 z-10 w-full sm:w-auto min-w-40 bg-primary rounded-lg shadow-default'>
      <ul className='py-2'>
        {categories.map(category => (
          <li key={category.id}>
            <button
              type='button'
              className='inline-flex w-full justify-center sm:justify-start cursor-pointer px-4 py-2 hover:transition-opacity hover:duration-300 hover:opacity-80'
              onClick={() => onSelectCategory(category)}
            >
              <Text color='background-color'>{category.name}</Text>
            </button>
          </li>
        ))}

        <li key='none'>
          <button
            type='button'
            className='inline-flex w-full justify-center sm:justify-start cursor-pointer px-4 py-2 hover:transition-opacity hover:duration-300 hover:opacity-80'
            onClick={() => onSelectCategory(null)}
          >
            <Text color='background-color'>
              <Translator path='searchInput.withoutCategory' />
            </Text>
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='flex flex-col w-full items-center gap-2'>
      <form
        onSubmit={onSubmit}
        className='w-full max-w-[46rem] rounded-lg sm:rounded-none shadow-default'
      >
        <div className='flex relative'>
          <button
            type='button'
            className='flex-shrink-0 z-10 min-w-40 hidden sm:inline-flex h-16 justify-center items-center gap-1 py-3 px-4 text-background-color bg-primary  rounded-s-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-primary60 focus:border-primary60'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Text type='medium' color='background-color'>
              {categorySelected ? (
                categorySelected.name
              ) : (
                <Translator path='searchInput.categoryLabel' />
              )}
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
              className='block w-full h-16 z-20 p-4 sm:p-2 sm:pr-16 rounded-lg sm:rounded-none bg-background-color text-primary font-normal text-base border-none placeholder-primary60 focus:outline-none focus:ring-0 focus:border-none'
              placeholder={t('searchInput.inputPlaceholder')}
              onChange={onChange}
            />

            <button
              type='button'
              className='absolute top-0 end-0 hidden sm:flex w-16 h-16 justify-center items-center p-2 bg-primary rounded-e-lg hover:transition-opacity hover:duration-300 hover:opacity-90 focus:outline-none focus:ring focus:ring-primary60 focus:border-primary60'
              onClick={onSearch}
            >
              <Icon variant='magnifying-glass' color='background-color' />

              <span className='sr-only'>
                <Translator path='searchInput.buttonLabel' />
              </span>
            </button>
          </div>
        </div>
      </form>

      <div className='relative flex flex-col sm:hidden w-full gap-2'>
        <GenericButton
          title={
            categorySelected
              ? categorySelected.name
              : t('searchInput.categoryLabel')
          }
          onClick={() => setShowDropdown(!showDropdown)}
          isHugWidth
        />

        {showDropdown && renderCategoryDropdown}

        <GenericButton
          title={t('searchInput.buttonTitle')}
          onClick={onSearch}
          isHugWidth
        />
      </div>
    </div>
  );
}

export default memo(SearchInput);
