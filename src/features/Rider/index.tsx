import { Title } from '@/components/Elements/Title';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MemberSlider } from './Slider';
import { FirstView } from './FirstView';
import { ProfileContent } from './ProfileContent';
import { About } from './About';

export const RiderComponent = () => {
  return (
    <PageLayout>
      <FirstView />
      <MainLayout>
        <ProfileContent />
      </MainLayout>
      <About />
      <MainLayout>
        <MemberSlider />
      </MainLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
