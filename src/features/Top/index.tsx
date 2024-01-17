import { Carousel } from './Slider/Carousel';
import { Title } from '@/components/Elements/Title';
import { UpdatesContent } from './UpDates/UpDateContents';
import { TheTeam } from './TheTeam';
import { Staff } from './Staff/Staff';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Schedule } from './Schedule/Schedule';
import { OurPartners } from './OurPartners';
import { OfficialMedia } from './OfficialMedia';
import { Message } from './Message/Message';

export const TopContent = () => {
  return (
    <>
      <PageLayout>
        <Carousel />
        <Message />
        <Title title="Updates" subTitle="Updates" />
        <UpdatesContent />
        <Title title="The Team" subTitle="The Team" />
        <TheTeam />
        <Title title="TheStaff" subTitle="TheStaff" />
        <Staff />
        <Title title="Schedule" subTitle="Schedule" />
        <Schedule />
        <Title title="Our Partners" subTitle="Our Partners" />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </>
  );
};
