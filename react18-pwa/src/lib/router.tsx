import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layout/root-layout';
import Home from '@/pages/home';
import Chat from '@/pages/chat';
import Close from '@/pages/close';
import { Cookies } from 'react-cookie';
import { useGenreQuery } from '@/query/movie';
import { apis } from './apis';
import { queryClient } from './query-client';

const cookies = new Cookies();

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    id: 'root',
    loader: async () => {
      await apis.auth.authentication();
      const session = cookies.get('session');
      if (session) {
        return session;
      }
      return null;
    },
    children: [
      {
        path: '',
        element: <Home />,
        id: 'Home',
        loader: async () => {
          const genre = await queryClient.ensureQueryData(useGenreQuery());
          return { genre };
        },
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
