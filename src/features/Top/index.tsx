import { Carousel } from './Slider/Carousel';
import { Title } from '@/components/Elements/Title';
import { UpdatesContent } from './UpDates/UpDateContents';
import { TheTeam } from './TheTeam';
import { Staff } from './Staff/Staff';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Schedule } from './Schedule/Schedule';
import { OurPartners } from './OurPartners';
import { OfficialMedia } from './OfficialMedia';
import { Box } from '@chakra-ui/react';
import { Message } from '@/components/Elements/Message';
import { useTranslation } from 'react-i18next';

export const TopContent = () => {
  const { t } = useTranslation('topMessage');
  const message = {
    title: 'Asia Union TCS Racing Team',
    text: t('teamDescription'),
  };

  return (
    <>
      <PageLayout>
        <Box
          position="relative"
          h={{ base: 'auto', lg: 'calc(100vh - 90px)' }}
          mt={{ base: '110px', lg: '50px' }}
        >
          <Carousel />
        </Box>
        <Message message={message} />
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
