import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';

export const Message: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <MainLayout>
      <Box position="relative" my="92px">
        <Box w="214px" h="214px" m="0 auto" opacity="0.5">
          <Image src="/images/ico-team-logo.webp" objectFit="cover" />
        </Box>
        <Box
          w="100%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex="2"
        >
          <Text
            fontSize={{ base: '18px', lg: '64px' }}
            fontWeight="bold"
            mb="16px"
            color="white"
          >
            Asia&nbsp;Union&nbsp;TCS&nbsp;Racing&nbsp;Team
          </Text>
          <Text
            fontSize={{ base: '10px', lg: '18px' }}
            fontWeight="bold"
            color="white"
          >
            マウンテンバイクを通じて、アジアから世界への架け橋となるチームを
            {isMobile ? null : <br />}
            目指し、アジア各国のチャンピオンライダーを集めたドリームチーム。
          </Text>
        </Box>
      </Box>
    </MainLayout>
  );
};
