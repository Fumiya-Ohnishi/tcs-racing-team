import { ContactPage } from '@/pages/Contact';
import { TopPage } from '@/pages/Home';
import { OurPartnersPage } from '@/pages/OurPartners';
import { RiderPage } from '@/pages/Rider';
import { SchedulePage } from '@/pages/Schedule';
import { TeamMemberPage } from '@/pages/TeamMember';
import { UpdateContentPage } from '@/pages/UpdateContent';
import { UpdateListPage } from '@/pages/UpdateList';

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
    path: '/contact',
    element: <ContactPage />,
    children: [{ path: '', element: <ContactPage /> }],
  },
  {
    path: '/schedule-page',
    element: <SchedulePage />,
    children: [{ path: '', element: <SchedulePage /> }],
  },
  {
    path: '/our-partners',
    element: <OurPartnersPage />,
    children: [{ path: '', element: <OurPartnersPage /> }],
  },
  {
    path: '/update-content/:id',
    element: <UpdateContentPage />,
    children: [{ path: '', element: <UpdateContentPage /> }],
  },
  {
    path: '/update-list',
    element: <UpdateListPage />,
    children: [{ path: '', element: <UpdateListPage /> }],
  },
];
