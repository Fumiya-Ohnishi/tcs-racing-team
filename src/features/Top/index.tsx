import { Carousel } from './Slider/Carousel';
import { Title } from '@/components/Elements/Title';
import { UpdatesContent } from './UpDates/UpDateContents';
import { TheTeam } from './TheTeam';
import { Staff } from './Staff/Staff';
import { PageLayout } from '@/components/Layouts/PageLayout';

export const TopContent = () => {
  return (
    <>
      <PageLayout>
        <Carousel />
        <Title title="Updates" subTitle="Updates" />
        <UpdatesContent />
        <Title title="The Team" subTitle="The Team" />
        <TheTeam />
        <Title title="TheStaff" subTitle="TheStaff" />
        <Staff />
      </PageLayout>
    </>
  );
};
