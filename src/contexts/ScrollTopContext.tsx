import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { ScrollToContextProps, ScrollToType } from '../@types';

export const ScrollTopContext = createContext({} as ScrollToContextProps);

export function ScrollTopProvider({ children }: Required<PropsWithChildren>) {
  const [to, setTo] = useState<ScrollToType>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleTo(newTo: ScrollToType): void {
    setTo(newTo);
    navigate(newTo === 'products' ? '/products' : '/');
  }

  const isProductPage = to === 'products';

  useEffect(() => {
    if (!to && pathname === '/products') setTo('products');

    if (to && !isProductPage && pathname === '/') {
      scroller.scrollTo(to, {
        duration: to === 'events' ? 500 : 750,
        delay: 100,
        smooth: true,
        spy: true,
      });
    }
  }, [to, pathname, isProductPage]);

  return (
    <ScrollTopContext.Provider value={{ to, handleTo }}>
      {children}
    </ScrollTopContext.Provider>
  );
}
