import { useAuth } from '@context/AuthContext';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateProvider = ({ children }: PropsWithChildren) => {
  const { name } = useAuth();

  if (!name) return <Navigate to={'/home'} />;

  return <>{children}</>;
};

export default PrivateProvider;
