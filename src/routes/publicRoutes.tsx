import { TopPage } from '@/pages/Home';
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
];
