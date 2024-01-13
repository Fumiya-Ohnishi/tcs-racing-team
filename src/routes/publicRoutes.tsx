import { TopPage } from '@/pages/Home';

export const publicRoutes = [
  {
    path: '/',
    element: <TopPage />,
    children: [{ path: '', element: <TopPage /> }],
  },
];
