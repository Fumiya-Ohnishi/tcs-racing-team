import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

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
        {/* 一番上の画像（中央配置） */}
        <SimpleGrid
          columns={3}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          <Box
            maxW="272px"
            gridColumn="2 / 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-01.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </SimpleGrid>

        {/* 2段目（3つの画像） */}
        <SimpleGrid
          columns={3}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          <Box
            maxW="128px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-04.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-05.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="96px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-polygonbike.png"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </SimpleGrid>

        {/* 3段目（3つの画像） */}
        <SimpleGrid
          columns={3}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          <Box
            maxW="88px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-02.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="112px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-07.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="96px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-09.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </SimpleGrid>

        {/* 4段目（中央配置） */}
        <SimpleGrid
          columns={3}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          <Box
            maxW="112px"
            gridColumn="2 / 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-10.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </SimpleGrid>

        {/* 5段目（3つの画像） */}
        <SimpleGrid
          columns={3}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          <Box
            maxW="160px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-12.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="168px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-13.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
          <Box
            maxW="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/top/ourPartners/img-sponsor-03.webp"
              alt="OurPartners"
              w="100%"
              h="auto"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
