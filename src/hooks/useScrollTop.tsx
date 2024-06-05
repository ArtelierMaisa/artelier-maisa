import { useContext } from 'react';

import { ScrollTopContext } from '../contexts';

export function useScrollTop() {
  return useContext(ScrollTopContext);
}
