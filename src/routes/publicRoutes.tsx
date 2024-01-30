import { TopPage } from '@/pages/Home';
import { RiderPage } from '@/pages/Rider';
import { SchedulePage } from '@/pages/Schedule';
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
    path: '/member-page',
    element: <RiderPage />,
    children: [{ path: '', element: <RiderPage /> }],
  },
  {
    path: '/schedule-page',
    element: <SchedulePage />,
    children: [{ path: '', element: <SchedulePage /> }],
  },
];
