import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TeamMemberSmallTitle } from '../components/TeamMemberSmallTitle';

interface TeamMemberStaff {
  id: number;
  name: string;
  image: string;
}

const mainStaffs: TeamMemberStaff[] = [
  {
    id: 1,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-top-rider-01.webp',
  },
  {
    id: 2,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-top-rider-01.webp',
  },
];
const subStaffs: TeamMemberStaff[] = [
  {
    id: 1,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-top-rider-01.webp',
  },
  {
    id: 2,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-top-rider-01.webp',
  },
  {
    id: 3,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-top-rider-01.webp',
  },
];

export const TeamMemberStaff: FC = () => {
  return (
    <MainLayout>
      <Box mb="280px">
        <TeamMemberSmallTitle title="The Staff" />
        <VStack spacing={24}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={8}
          >
            {mainStaffs.map(staff => (
              <Box key={staff.id} position="relative">
                <Box w={{ base: '100%', lg: '72%' }} m="0 auto">
                  <Image src={staff.image} />
                </Box>
                <Box
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                >
                  <Text fontSize="24px" mr="48px">
                    {staff.name}
                  </Text>
                  <Box>
                    <Image
                      w="11px"
                      h="25px"
                      src="/images/ico-arrow-white-brock.svg"
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={{ base: 8, lg: 16 }}
          >
            {subStaffs.map(staff => (
              <Box key={staff.id} position="relative">
                <Box w="100%" m="0 auto">
                  <Image src={staff.image} />
                </Box>
                <Box
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                >
                  <Text fontSize="24px">{staff.name}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Box>
    </MainLayout>
  );
};
