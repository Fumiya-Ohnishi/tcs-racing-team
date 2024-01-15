import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
  subTitle: string;
};

export const Title: FC<Props> = ({ title, subTitle }) => {
  return (
    <MainLayout>
      <Box position="relative" minH="160px" mb="56px">
        <Box
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          color="#1A1A1A"
          fontSize="108px"
          textShadow="1px 1px 0 #C0C0C0, -1px -1px 0 #C0C0C0, -1px 1px 0 #C0C0C0, 1px -1px 0 #C0C0C0, 0px 1px 0 #C0C0C0, 0 -1px 0 #C0C0C0, -1px 0 0 #C0C0C0, 1px 0 0 #C0C0C0"
          zIndex="0"
        >
          {subTitle}
        </Box>
        <Box
          position="absolute"
          bottom="0"
          color="#fff"
          fontSize="56px"
          fontWeight="bold"
          zIndex="1"
        >
          {title}
        </Box>
        <Box
          position="absolute"
          bottom="0"
          left="0"
          w="10%"
          height="2px"
          bg={'url(images/img-text-bg.webp)'}
          bgSize="cover"
          bgRepeat="no-repeat"
        ></Box>
      </Box>
    </MainLayout>
  );
};
