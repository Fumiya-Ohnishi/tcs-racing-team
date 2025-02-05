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
        px={4}
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
        <HStack
          justifyContent="space-evenly" // 均等配置
          mb={{ base: '54px', lg: '84px' }}
          mx="auto"
        >
          <Box flex="1" maxW="128px">
            <Image
              src="/images/top/ourPartners/img-sponsor-04.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="80px">
            <Image
              src="/images/top/ourPartners/img-sponsor-05.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="96px">
            <Image
              src="/images/top/ourPartners/img-sponsor-polygonbike.png"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </HStack>
        <HStack
          justifyContent="space-evenly" // 均等配置
          mb={{ base: '54px', lg: '84px' }}
          mx="auto"
        >
          <Box flex="1" maxW="88px">
            <Image
              src="/images/top/ourPartners/img-sponsor-02.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="112px">
            <Image
              src="/images/top/ourPartners/img-sponsor-07.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="96px">
            <Image
              src="/images/top/ourPartners/img-sponsor-09.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </HStack>
        <HStack
          justifyContent="space-evenly" // 均等配置
          mb={{ base: '54px', lg: '84px' }}
          mx="auto"
        >
          <Box flex="1" maxW="96px">
            <Image
              src="/images/top/ourPartners/img-sponsor-10.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </HStack>
        <HStack justifyContent="space-evenly" mb={{ base: '54px', lg: '84px' }}>
          <Box flex="1" maxW="152px">
            <Image
              src="/images/top/ourPartners/img-sponsor-12.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="152px">
            <Image
              src="/images/top/ourPartners/img-sponsor-13.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box flex="1" maxW="88px">
            <Image
              src="/images/top/ourPartners/img-sponsor-03.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </HStack>
      </Box>
    </MainLayout>
  );
};
