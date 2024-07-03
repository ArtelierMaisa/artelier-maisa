import { onValue, ref, remove } from 'firebase/database';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
  About,
  Banner,
  Category,
  Highlight,
  Product,
  UserContextProps,
} from '../@types';
import { categoryMapper } from '../helpers';
import { database } from '../services';
import { mapper } from '../utils';

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: Required<PropsWithChildren>) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [about, setAbout] = useState<About>({} as About);

  function isGreaterThanPeriodRemove(highlight: Highlight): boolean {
    const currentTime = new Date().getTime();
    return currentTime > highlight.removedAt;
  }

  function sortProducts(product: Product, productCompare: Product): number {
    return productCompare.createdAt - product.createdAt;
  }

  function handleGenericErrorToast(): void {
    toast.error(
      'Falha ao buscar suas informações! Algo deu errado durante a busca de informações. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte técnico.',
      { duration: 7500 },
    );
  }

  useEffect(() => {
    const bannersRef = ref(database, 'banners');
    const categoriesRef = ref(database, 'categories');
    const highlightsRef = ref(database, 'highlights');
    const aboutRef = ref(database, 'about');

    const unsubscribeBanners = onValue(bannersRef, bannersSnapshot => {
      if (!bannersSnapshot.exists()) {
        setBanners([]);
        return handleGenericErrorToast();
      }

      const bannersFirebase = mapper<Banner[]>(bannersSnapshot);
      if (!bannersFirebase) return handleGenericErrorToast();

      setBanners(bannersFirebase);
    });

    const unsubscribeCategories = onValue(categoriesRef, categoriesSnapshot => {
      if (!categoriesSnapshot.exists()) {
        setProducts([]);
        setCategories([]);
        return;
      }

      const products: Product[] = [];
      const categoriesMapped = categoryMapper<Category[]>(categoriesSnapshot);
      categoriesMapped.forEach(category => {
        if (category?.products) products.push(...category.products);
      });
      const productsAvailable = products
        .filter(product => !product.isOccult)
        .sort(sortProducts);

      setProducts(productsAvailable);
      setCategories(categoriesMapped);
    });

    const unsubscribeHighlights = onValue(highlightsRef, highlightsSnapshot => {
      if (!highlightsSnapshot.exists()) {
        setHighlights([]);
        return handleGenericErrorToast();
      }

      const highlightsFirebase = mapper<Highlight[]>(highlightsSnapshot);
      if (!highlightsFirebase) return handleGenericErrorToast();

      highlightsFirebase.forEach(async highlight => {
        if (isGreaterThanPeriodRemove(highlight)) {
          const highlightRef = ref(database, `highlights/${highlight.id}`);
          remove(highlightRef);
        }
      });

      const highlightsInPeriod = highlightsFirebase.filter(
        highlight => !isGreaterThanPeriodRemove(highlight),
      );

      setHighlights(highlightsInPeriod);
    });

    const unsubscribeAbout = onValue(aboutRef, aboutSnapshot => {
      if (!aboutSnapshot.exists()) return handleGenericErrorToast();

      const aboutFirebase = mapper<About[]>(aboutSnapshot)[0];
      if (!aboutFirebase) {
        setAbout({} as About);
        return handleGenericErrorToast();
      }

      setAbout(aboutFirebase);
    });

    () => {
      unsubscribeBanners();
      unsubscribeCategories();
      unsubscribeHighlights();
      unsubscribeAbout();
    };
  }, []);

  useEffect(() => {
    if (banners.length > 0 && about?.id) setIsLoaded(true);
  }, [banners, about]);

  return (
    <UserContext.Provider
      value={{ about, highlights, banners, categories, products, isLoaded }}
    >
      {children}
    </UserContext.Provider>
  );
}
