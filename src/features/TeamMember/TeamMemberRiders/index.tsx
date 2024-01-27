import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface TeamMemberRider {
  id: number;
  name: string;
  image: string;
}

const riders: TeamMemberRider[] = [
  {
    id: 1,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-teamMember-01.png',
  },
  {
    id: 2,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-teamMember-01.png',
  },
  {
    id: 3,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-teamMember-01.png',
  },
  {
    id: 4,
    name: 'KOHEI YAMAMOTO',
    image: '/images/rider/img-teamMember-01.png',
  },
];

export const TeamMemberRiders: FC = () => {
  return (
    <MainLayout>
      <Box mb="160px">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={8}
        >
          {riders.map(rider => (
            <Box key={rider.id} position="relative">
              <Link to="/member-page">
                <Image src={rider.image} />
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
                    {rider.name}
                  </Text>
                  <Box>
                    <Image
                      w="11px"
                      h="25px"
                      src="/images/ico-arrow-white-brock.svg"
                    />
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};
