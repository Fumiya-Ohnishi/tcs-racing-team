import { Title } from '@/components/Elements/Title';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MemberSlider } from './Slider';
import { FirstView } from './FirstView';
import { ProfileContent } from './ProfileContent';
import { About } from './About';
import { useParams } from 'react-router-dom';
import { parseMemberId } from '@/constants';

export const RiderComponent = () => {
  const { id } = useParams();
  if (!id) return;
  const parsedId = parseMemberId(id);
  if (!parsedId) return;
  return (
    <PageLayout>
      <FirstView id={parsedId} />
      <MainLayout>
        <ProfileContent id={parsedId} />
      </MainLayout>
      <About id={parsedId} />
      <MainLayout>
        <MemberSlider />
      </MainLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
