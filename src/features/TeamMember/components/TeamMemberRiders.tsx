import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

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
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {riders.map(rider => (
        <Box key={rider.id} position="relative">
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
            <Text fontSize="24px" mr="48px">{rider.name}</Text>
          <Box>
            <Image w="11px" h="25px" src="/images/ico-arrow-white-brock.svg" />
          </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};
