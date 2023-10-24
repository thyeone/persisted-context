import usePersistedState from '@hooks/usePersistedState';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo } from 'react';

export type AuthContextValue = {
  name: string | null;
  setName: Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = usePersistedState<string | null>('name', null);

  const memoizedValue = useMemo(
    () => ({
      name,
      setName,
    }),
    [name, setName],
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};
