import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TeamMemberSmallTitle } from '../components/TeamMemberSmallTitle';
import { useNavigate } from 'react-router-dom';

interface TeamMemberStaff {
  id: number;
  name: string;
  image: string;
}

const mainStaffs: TeamMemberStaff[] = [
  {
    id: 0,
    name: '山本幸平',
    image: '/images/team/img-team-staff01.webp',
  },
  {
    id: 1,
    name: '福光悠佑',
    image: '/images/team/img-team-staff02.webp',
  },
];
const subStaffs: TeamMemberStaff[] = [
  {
    id: 0,
    name: '佐藤寿美',
    image: '/images/team/img-team-staff03.webp',
  },
  {
    id: 1,
    name: '汐澤芳治',
    image: '/images/team/img-team-staff04.webp',
  },
  {
    id: 2,
    name: 'Dr. ドニー クスマ',
    image: 'https://placehold.jp/000000/000000/327x218.png',
  },
];

export const TeamMemberStaff: FC = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Box mb={{ base: '200px', lg: '280px' }}>
        <TeamMemberSmallTitle title="The Staff" />
        <VStack spacing={24}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={8}
          >
            {mainStaffs.map(staff => (
              <Box
                key={staff.id}
                position="relative"
                onClick={() => {
                  navigate('/member-page', {
                    state: { id: staff.id },
                  });
                }}
              >
                <Box
                  w={{ base: '100%', lg: '72%' }}
                  m="0 auto"
                  bg="black"
                  h="100%"
                >
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
                  <Text fontSize="18px" mr="48px">
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
                <Box w="100%" m="0 auto" bg="black" h="100%" minH="126px">
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
                  <Text fontSize="18px">{staff.name}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Box>
    </MainLayout>
  );
};
