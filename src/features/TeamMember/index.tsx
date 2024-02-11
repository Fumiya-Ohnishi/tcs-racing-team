import { PageLayout } from '@/components/Layouts/PageLayout';
import { Message } from '@/components/Elements/Message';
import { OfficialMedia } from '../Top/OfficialMedia';
import { OurPartners } from '../Top/OurPartners';
import { Box, Image } from '@chakra-ui/react';
import { Title } from '@/components/Elements/Title';
import { TeamMemberStaff } from './TeamMemberStaff';
import { TeamMemberCoreValue } from './TeamMemberCoreValue';
import { TeamMemberRiders } from './TeamMemberRiders';
import { useTranslation } from 'react-i18next';

// TODO:多言語ファイルを使う
// const message = {
//   title: '日本からアジアへ、そして世界へ',
//   text: 'マウンテンバイクを通じて、アジアから世界への架け橋となるチームを目指し、アジア各国のチャンピオンライダーを集めたドリームチーム。',
// };

export const TeamMemberContent = () => {
  const { t } = useTranslation('ourTeam');
  const message = {
    title: t('teamTitle'),
    text: t('teamDescription'),
  };
  console.log('message', message);

  return (
    <Box>
      <PageLayout>
        <Box
          position="relative"
          display={{ base: 'block', lg: 'none' }}
          h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
        >
          <Image src="/images/team/img-top-sp.webp" mt="108px" />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="#000"
            opacity={0.5}
            zIndex="1"
          />
        </Box>
        <Box
          position="relative"
          display={{ base: 'none', lg: 'block' }}
          h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
          mt="52px"
        >
          <Image
            src="/images/team/img-team-top.jpg"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="#000"
            opacity={0.5}
            zIndex="1"
          />
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
