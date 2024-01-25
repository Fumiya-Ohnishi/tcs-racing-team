import { PageLayout } from '@/components/Layouts/PageLayout';
import { Message } from '../Top/Message/Message';
import { OfficialMedia } from '../Top/OfficialMedia';
import { OurPartners } from '../Top/OurPartners';
import { Box, Image } from '@chakra-ui/react';
import { Title } from '@/components/Elements/Title';
import { TeamMemberStaff } from './TeamMemberStaff';
import { TeamMemberCoreValue } from './TeamMemberCoreValue';
import { TeamMemberRiders } from './TeamMemberRiders';

export const TeamMemberContent = () => {
  return (
    <Box>
      <PageLayout>
        <Box>
          <Image src="/images/rider/img-top-pc.webp" />
        </Box>
        <Message />
        <TeamMemberCoreValue />
        <Title title="The Riders" subTitle="The Riders" />
        <TeamMemberRiders />
        <TeamMemberStaff />
        <Title title="Our Partners" subTitle="Our Partners" />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </Box>
  );
};
