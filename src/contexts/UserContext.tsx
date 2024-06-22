import { get, ref, remove } from 'firebase/database';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';

import { About, Banner, Highlight, UserContextProps } from '../@types';
import { database } from '../services';
import { mapper } from '../utils';

// TODO: Create type to UserContext in @types/contexts.
export const UserContext = createContext({} as UserContextProps);

// TODO: Create the data user logic. Add all requests and states this context.
export function UserProvider({ children }: Required<PropsWithChildren>) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [about, setAbout] = useState<About>({} as About);

  function isGreaterThanPeriodRemove(highlight: Highlight): boolean {
    const currentTime = new Date().getTime();
    return currentTime > highlight.removedAt;
  }

  function handleGenericErrorToast(): void {
    toast.error(
      'Falha ao buscar suas informações! Algo deu errado durante a busca de informações. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte técnico.',
      { duration: 7500 },
    );
  }

  const handleGetAbout = useCallback(async () => {
    const aboutRef = ref(database, 'about');
    const aboutSnapshot = await get(aboutRef);

    if (!aboutSnapshot.exists()) return handleGenericErrorToast();

    const aboutFirebase = mapper<About[]>(aboutSnapshot)[0];

    if (!aboutFirebase) return handleGenericErrorToast();

    setAbout(aboutFirebase);
  }, []);

  const handleGetHighlights = useCallback(async () => {
    const highlightsRef = ref(database, 'highlights');
    const highlightsSnapshot = await get(highlightsRef);

    if (!highlightsSnapshot.exists()) return setHighlights([]);

    const highlightsFirebase = mapper<Highlight[]>(highlightsSnapshot);

    if (!highlightsFirebase) return handleGenericErrorToast();

    // TODO -> REMOVE HIGHLIGHTS IMAGES FROM FIREBASE STORAGE
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
  }, []);

  const handleGetBanners = useCallback(async () => {
    const bannersRef = ref(database, 'banners');
    const bannersSnapshot = await get(bannersRef);

    if (!bannersSnapshot.exists()) return handleGenericErrorToast();

    const bannersFirebase = mapper<Banner[]>(bannersSnapshot);

    if (!bannersFirebase) return handleGenericErrorToast();

    setBanners(bannersFirebase);
  }, []);

  const fetchFirebase = useCallback(async () => {
    await handleGetBanners();
    await handleGetHighlights();
    await handleGetAbout();

    setIsLoaded(true);
  }, [handleGetAbout, handleGetHighlights, handleGetBanners]);

  useEffect(() => {
    fetchFirebase();
  }, [fetchFirebase]);

  return (
    <UserContext.Provider value={{ about, highlights, banners, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
}
