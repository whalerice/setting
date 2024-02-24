import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/login';
import Ticket from '@/pages/ticket';
import MainLayout from '@/layout/main-layout';
import Dashboard from '@/pages/dashboard';
import Answer from '@/pages/answer';
import RootLayout from '@/layout/root-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <RootLayout>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </RootLayout>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
        id: '대시보드',
        // loader: teamLoader,
      },
      {
        path: 'ticket',
        element: <Ticket />,
        id: '티켓',
        // loader: teamLoader,
      },
      {
        path: 'answer',
        element: <Answer />,
        id: 'Answer',
        // loader: teamLoader,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <RootLayout>
        <Login />
      </RootLayout>
    ),
  },
];

export const router = createBrowserRouter(routes, {
  basename: '/',
  future: { v7_normalizeFormMethod: true },
});
