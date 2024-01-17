import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Message: FC = () => {
  return (
    <MainLayout>
      <Box position="relative" my="92px">
        <Box
          w="214px"
          h="214px"
          m="0 auto"
          position="relative"
          borderRadius="full"
          overflow="hidden"
        >
          <Image src="/images/ico-team-logo.webp" objectFit="cover" />
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg="blackAlpha.500"
            zIndex="1"
          />
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
          <Text fontSize="64px" color="white">
            Asia&nbsp;Union&nbsp;TCS&nbsp;Racing&nbsp;Team
          </Text>
          <Text fontSize="18px" color="white">
            マウンテンバイクを通じて、アジアから世界への架け橋となるチームを
            <br />
            目指し、アジア各国のチャンピオンライダーを集めたドリームチーム。
          </Text>
        </Box>
      </Box>
    </MainLayout>
  );
};
