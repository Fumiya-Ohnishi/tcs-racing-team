import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  message: {
    title: string;
    text: string;
  };
}

export const Message: FC<Props> = ({ message }) => {
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
            fontSize={{ base: '18px', lg: '50px' }}
            fontWeight="bold"
            mb="16px"
            color="white"
          >
            {message.title}
          </Text>
          <Text
            fontSize={{ base: '10px', lg: '18px' }}
            fontWeight="bold"
            color="white"
            maxW={{ base: '', lg: '590px' }}
            m="0 auto"
          >
            {message.text}
          </Text>
        </Box>
      </Box>
    </MainLayout>
  );
};
