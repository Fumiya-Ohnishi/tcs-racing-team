import { TopPage } from '@/pages/Home';
import { RiderPage } from '@/pages/Rider';
import { TeamMemberPage } from '@/pages/TeamMember';

export const publicRoutes = [
  {
    path: '/',
    element: <TopPage />,
    children: [{ path: '', element: <TopPage /> }],
  },
  {
    path: '/team-member',
    element: <TeamMemberPage />,
    children: [{ path: '', element: <TeamMemberPage /> }],
  },
  {
    path: '/rider',
    element: <RiderPage />,
    children: [{ path: '', element: <RiderPage /> }],
  },
];
