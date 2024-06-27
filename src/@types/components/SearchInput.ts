import { ChangeEvent } from 'react';

export interface SearchInputCategoryProps {
  id: string;
  name: string;
}

export interface SearchInputProps {
  categories: SearchInputCategoryProps[];
  searchValue?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  onSelect?(category: SearchInputCategoryProps | null): void;
  onSearch?(): void;
}
