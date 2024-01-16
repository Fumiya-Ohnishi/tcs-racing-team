import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, HStack, Image } from '@chakra-ui/react';

export const OurPartners = () => {
  return (
    <MainLayout>
      <Box w="100%" bg="white" pt="85px" pb="68px" mb="95px">
        <Box maxW="294px" mx="auto" mb="84px">
          <Image src="images/img-sponsor-01.webp" alt="OurPartners" />
        </Box>
        <HStack justifyContent="space-around" mb="84px">
          <Box maxW="100px" mx="auto">
            <Image src="images/img-sponsor-02.webp" alt="OurPartners" />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image src="images/img-sponsor-03.webp" alt="OurPartners" />
          </Box>
          <Box maxW="191px" mx="auto">
            <Image src="images/img-sponsor-04.webp" alt="OurPartners" />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image src="images/img-sponsor-05.webp" alt="OurPartners" />
          </Box>
        </HStack>
        <HStack justifyContent="space-around" w="50%" mb="84px" mx="auto">
          <Box maxW="178px" mx="auto">
            <Image src="images/img-sponsor-06.webp" alt="OurPartners" />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image src="images/img-sponsor-07.webp" alt="OurPartners" />
          </Box>
        </HStack>
        <HStack justifyContent="space-around" w="70%" mb="84px" mx="auto">
          <Box maxW="136px" mx="auto">
            <Image src="images/img-sponsor-08.webp" alt="OurPartners" />
          </Box>
          <Box maxW="100px" mx="auto">
            <Image src="images/img-sponsor-09.webp" alt="OurPartners" />
          </Box>
          <Box maxW="109px" mx="auto">
            <Image src="images/img-sponsor-10.webp" alt="OurPartners" />
          </Box>
        </HStack>
      </Box>
    </MainLayout>
  );
};
