import Layout from '@components/common/Layout';
import Home from '@pages/Home';
import Profile from '@pages/Profile';
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
