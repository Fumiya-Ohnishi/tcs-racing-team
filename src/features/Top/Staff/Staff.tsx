import { LinkButton } from '@/components/Elements/LinkButton';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface StaffImages {
  id: number;
  src: string;
  name: string;
  jobType: string;
  navigateLink?: string;
  navigateState?: number;
}

const staffImages: StaffImages[] = [
  {
    id: 1,
    src: '/images/staff/img-staff-fukumitsu.webp',
    name: '福光 悠介',
    jobType: 'GM',
    navigateLink: '/member-page',
    navigateState: 1,
  },
  {
    id: 2,
    src: '/images/staff/img-staff-shiozawa.webp',
    name: '汐澤 芳治',
    jobType: '広報',
  },
  {
    id: 3,
    src: '/images/staff/img-staff-deddy.png',
    name: 'デディー クルニアワン',
    jobType: 'スタッフ',
  },
];

export const Staff = () => {
  const navigate = useNavigate();
  return (
    <Box mb="116px">
      <MainLayout>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: '16px', lg: 12 }}
          mb="16px"
          justifyItems="center"
        >
          {staffImages.map(image => (
            <GridItem
              key={image.id}
              w="full"
              h="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="relative"
                mb="16px"
                h="100%"
                cursor={image.navigateLink ? 'pointer' : 'default'}
                onClick={() => {
                  if (image.navigateLink && image.navigateState) {
                    navigate(image.navigateLink, {
                      state: { id: image.navigateState },
                    });
                  }
                }}
              >
                <Image
                  src={image.src}
                  alt="スタッフ画像"
                  margin="auto"
                  w="full"
                  maxW={{ base: 'full', lg: '216px' }}
                  h="auto"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top="104%"
                  left="10%"
                  transform="translateY(-100%)"
                >
                  <Text fontSize={{ base: '10px', lg: '16px' }}>
                    {image.jobType}
                  </Text>
                  <Text fontSize={{ base: '10px', lg: '16px' }}>
                    {image.name}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <LinkButton link="/team-member" text="Overview" />
      </MainLayout>
      <Divider orientation="horizontal" mt="64px" mx="auto" w="90%" />
    </Box>
  );
};
