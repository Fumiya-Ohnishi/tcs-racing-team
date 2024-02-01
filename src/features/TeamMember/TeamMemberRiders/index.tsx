import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface TeamMemberRider {
  id: number;
  name: string;
  image: string;
}

const riders: TeamMemberRider[] = [
  {
    id: 2,
    name: 'リアッド ハキム',
    image: '/images/img-theTeam-02.webp',
  },
  {
    id: 3,
    name: 'サユ ベラ',
    image: '/images/img-theTeam-03.webp',
  },
  {
    id: 4,
    name: '松本 佑太',
    image: '/images/img-theTeam-04.webp',
  },
  {
    id: 5,
    name: 'エセビア ニコル',
    image: '/images/img-theTeam-05.webp',
  },
];

export const TeamMemberRiders: FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box mb="160px">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={8}
        >
          {riders.map(rider => (
            <Box
              key={rider.id}
              position="relative"
              onClick={() => {
                navigate('/member-page', {
                  state: { id: rider.id },
                });
              }}
            >
              {/* <Link to="/member-page"> */}
              <Image src={rider.image} w="100%" h="100%" />
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
              {/* </Link> */}
            </Box>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};
