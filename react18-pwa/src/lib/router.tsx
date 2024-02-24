import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layout/root-layout';
import Home from '@/pages/home';
import Chat from '@/pages/chat';
import Close from '@/pages/close';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),

    children: [
      {
        path: '',
        element: <Home />,
        id: 'Home',
      },
      {
        path: '/chat/:id',
        element: <Chat />,
        id: 'Chat',
      },
      {
        path: '/close',
        element: <Close />,
        id: 'Close',
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: '/',
  future: { v7_normalizeFormMethod: true },
});
