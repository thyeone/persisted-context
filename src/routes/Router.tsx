import Layout from '@components/common/Layout';
import Profile from '@pages/Profile';
import Home from '@pages/home';
import PrivateProvider from '@provider/PrivateProvider';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/home', element: <Home /> },
      {
        path: '/profile',
        element: (
          <PrivateProvider>
            <Profile />,
          </PrivateProvider>
        ),
      },
    ],
  },
]);

export default Router;
