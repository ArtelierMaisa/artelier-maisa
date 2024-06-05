import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollTopProvider } from '../contexts';
import { LandingPage, NotFound, Products } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <ScrollTopProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollTopProvider>
    </BrowserRouter>
  );
}
