import { LinkButton } from '@/components/Elements/LinkButton';
import { LinkUnderBarButton } from '@/components/Elements/LinkUnderBarButton';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react';

interface StaffImages {
  id: number;
  src: string;
  alt: string;
  name: string;
  jobType: string;
  isReadMore?: boolean;
}

const staffImages: StaffImages[] = [
  {
    id: 1,
    src: '/images/img-staff-1.png',
    alt: 'スタッフ画像',
    name: '福光 悠介',
    jobType: 'GM',
    isReadMore: true,
  },
  {
    id: 2,
    src: '/images/img-staff-1.png',
    alt: 'スタッフ画像',
    name: '佐藤 寿美',
    jobType: 'マネージャー',
  },
  {
    id: 3,
    src: '/images/img-staff-1.png',
    alt: 'スタッフ画像',
    name: '汐澤 芳治',
    jobType: '広報',
  },
  {
    id: 4,
    src: '/images/img-staff-1.png',
    alt: 'スタッフ画像',
    name: 'Ms. X -Coming Soon',
    jobType: 'アンバサダー',
  },
];

export const Staff = () => {
  return (
    <Box mb="116px">
      <MainLayout>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={{ base: '16px', lg: 12 }}
        >
          {staffImages.map(image => (
            <GridItem key={image.id}>
              <Box position="relative" bg="#4D4D4D" mb="16px" py="30px">
                <Image src={image.src} margin="auto" />
                <Box
                  position="absolute"
                  top="96%"
                  left="15%"
                  transform="translateY(-100%)"
                >
                  <Text fontSize="xs">{image.jobType}</Text>
                  <Text>{image.name}</Text>
                </Box>
              </Box>
              {image.isReadMore && (
                <LinkUnderBarButton url="#" text="もっと見る" isCenter={true} />
              )}
            </GridItem>
          ))}
        </Grid>
        <LinkButton link="#" text="Overview" />
      </MainLayout>
      <Divider orientation="horizontal" mt="64px" mx="auto" w="90%" />
    </Box>
  );
};
