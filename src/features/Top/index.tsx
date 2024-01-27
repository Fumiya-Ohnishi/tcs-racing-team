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
import { Box } from '@chakra-ui/react';

export const TopContent = () => {
  return (
    <>
      <PageLayout>
        <Box position="relative">
          <Carousel />
        </Box>
        <Message />
        <Title title="Updates" subTitle="Updates" id="Updates" />
        <UpdatesContent />
        <Title title="The Team" subTitle="The Team" id="TheTeam" />
        <TheTeam />
        <Title
          title="TheStaff"
          subTitle="TheStaff"
          id="TheStaff"
          isCenter
          isHiddenUnderLine
        />
        <Staff />
        <Title title="Schedule" subTitle="Schedule" id="Schedule" />
        <Schedule />
        <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </>
  );
};
