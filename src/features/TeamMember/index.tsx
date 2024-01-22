import { PageLayout } from '@/components/Layouts/PageLayout';
import { Message } from '../Top/Message/Message';
import { OfficialMedia } from '../Top/OfficialMedia';
import { OurPartners } from '../Top/OurPartners';
import { TeamMemberCoreValue } from './components/TeamMemberCoreValue';
import { Box } from '@chakra-ui/react';

export const TeamMemberContent = () => {
  return (
    <Box color="#FFF">
      <PageLayout>
        <Message />
        <TeamMemberCoreValue />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </Box>
  );
};
