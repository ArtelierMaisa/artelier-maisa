import { get, ref } from 'firebase/database';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';

import { About, UserContextProps } from '../@types';
import { database } from '../services';

// TODO: Create type to UserContext in @types/contexts.
export const UserContext = createContext({} as UserContextProps);

// TODO: Create the data user logic. Add all requests and states this context.
export function UserProvider({ children }: Required<PropsWithChildren>) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [about, setAbout] = useState<About>({} as About);

  function handleAboutToastError(): void {
    toast.error(
      'Falha ao buscar suas informações! Algo deu errado durante a busca de informações. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte técnico.',
      { duration: 7500 },
    );
  }

  const handleGetAbout = useCallback(async () => {
    const aboutRef = ref(database, 'about');
    const aboutSnapshot = await get(aboutRef);

    if (!aboutSnapshot.exists()) return handleAboutToastError();

    const aboutFirebase: About = Object.keys(aboutSnapshot.val()).map(key => ({
      ...aboutSnapshot.val()[key],
      id: key,
    }))[0];

    if (!aboutFirebase) return handleAboutToastError();

    setAbout(aboutFirebase);
  }, []);

  const fetchFirebase = useCallback(async () => {
    await handleGetAbout();

    setIsLoaded(true);
  }, [handleGetAbout]);

  useEffect(() => {
    fetchFirebase();
  }, [fetchFirebase]);

  return (
    <UserContext.Provider value={{ about, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
}
