import { PageLayout } from '@/components/Layouts/PageLayout';
import { Message } from '@/components/Elements/Message';
import { OfficialMedia } from '../Top/OfficialMedia';
import { OurPartners } from '../Top/OurPartners';
import { Box, Image } from '@chakra-ui/react';
import { Title } from '@/components/Elements/Title';
import { TeamMemberStaff } from './TeamMemberStaff';
import { TeamMemberCoreValue } from './TeamMemberCoreValue';
import { TeamMemberRiders } from './TeamMemberRiders';

const message = {
  title: '日本からアジアへ、そして世界へ',
  text: 'マウンテンバイクを通じて、アジアから世界への架け橋となるチームを目指し、アジア各国のチャンピオンライダーを集めたドリームチーム。',
};

export const TeamMemberContent = () => {
  return (
    <Box>
      <PageLayout>
        <Box display={{ base: 'block', lg: 'none' }}>
          <Image src="/images/team/img-top-sp.webp" mt="108px" />
        </Box>
        <Box display={{ base: 'none', lg: 'block' }}>
          <Image src="/images/team/img-team-top.jpg" w="100%" />
        </Box>
        <Message message={message} />
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
