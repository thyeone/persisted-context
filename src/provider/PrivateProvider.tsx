import { AuthContext } from '@context/AuthContext';
import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateProvider = ({ children }: PropsWithChildren) => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('부모 트리에 AuthProvider를 찾을 수 없습니다.');
  const { name } = authContext;

  if (name) return <Navigate to={'/home'} />;

  return <>{children}</>;
};

export default PrivateProvider;
