import usePersistedState from '@hooks/usePersistedState';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo } from 'react';

type AuthContextValue = {
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

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('부모 트리에서 AuthContext를 사용해주세요.');

  const { name, setName } = authContext;

  return { name, setName };
};
