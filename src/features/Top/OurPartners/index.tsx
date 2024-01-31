import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, HStack, Image } from '@chakra-ui/react';

export const OurPartners = () => {
  return (
    <MainLayout>
      <Box
        w="100%"
        bg="white"
        pt="85px"
        pb={{ base: '31px', lg: '64px' }}
        mb="95px"
      >
        <Box
          maxW="294px"
          w={{ base: '167px', lg: 'auto' }}
          mx="auto"
          mb={{ base: '47px', lg: '84px' }}
        >
          <Image
            src="/images/top/ourPartners/img-sponsor-01.webp"
            alt="OurPartners"
          />
        </Box>
        <HStack justifyContent="space-around" mb={{ base: '54px', lg: '84px' }}>
          <Box maxW="100px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-02.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-03.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="191px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-04.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-05.webp"
              alt="OurPartners"
            />
          </Box>
        </HStack>
        <HStack
          justifyContent="space-around"
          w="50%"
          mb={{ base: '54px', lg: '84px' }}
          mx="auto"
        >
          <Box maxW="178px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-06.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="112px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-07.webp"
              alt="OurPartners"
            />
          </Box>
        </HStack>
        <HStack
          justifyContent="space-around"
          w="70%"
          mb={{ base: '54px', lg: '84px' }}
          mx="auto"
        >
          <Box maxW="136px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-08.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="100px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-09.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="109px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-10.webp"
              alt="OurPartners"
            />
          </Box>
        </HStack>
        <HStack
          justifyContent="space-around"
          w="50%"
          mb={{ base: '0px', lg: '84px' }}
          mx="auto"
        >
          <Box maxW="178px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-12.webp"
              alt="OurPartners"
            />
          </Box>
          <Box maxW="178px" mx="auto">
            <Image
              src="/images/top/ourPartners/img-sponsor-13.webp"
              alt="OurPartners"
            />
          </Box>
        </HStack>
      </Box>
    </MainLayout>
  );
};
