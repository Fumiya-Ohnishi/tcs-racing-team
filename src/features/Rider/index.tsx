import { Title } from '@/components/Elements/Title';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MemberSlider } from './Slider';
import { FirstView } from './FirstView';
import { ProfileContent } from './ProfileContent';
import { About } from './About';
import { useLocation } from 'react-router-dom';

export const RiderComponent = () => {
  const location = useLocation();
  const id = location.state.id;
  return (
    <PageLayout>
      <FirstView id={id} />
      <MainLayout>
        <ProfileContent id={id} />
      </MainLayout>
      <About id={id} />
      <MainLayout>
        <MemberSlider />
      </MainLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
