import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const images = [
  {
    id: 1,
    src: '/images/staff1.png',
    alt: 'スタッフ',
    japaneseName: '山本幸平',
    englishName: 'YAMAMOTOKOHEI',
  },
  {
    id: 2,
    src: '/images/staff1.png',
    alt: 'スタッフ',
    japaneseName: '山本幸平',
    englishName: 'YAMAMOTOKOHEI',
  },
  {
    id: 3,
    src: '/images/staff1.png',
    alt: 'スタッフ',
    japaneseName: '山本幸平',
    englishName: 'YAMAMOTOKOHEI',
  },
  {
    id: 4,
    src: '/images/staff1.png',
    alt: 'スタッフ',
    japaneseName: '山本幸平',
    englishName: 'YAMAMOTOKOHEI',
  },
];

export const Staff = () => {
  return (
    <>
      <Box my="0" mx="auto" w="76%" color="white">
        <Grid templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
          {images.map(image => (
            <GridItem key={image.id}>
              <Box position="relative">
                <Image src={image.src} />
                <Text
                  position="absolute"
                  left="50%"
                  top="100%"
                  transform="translateX(-50%) translateY(-100%)"
                  zIndex="overlay"
                >
                  {image.englishName}
                </Text>
              </Box>
              <Text fontSize="xs">{image.japaneseName}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Divider orientation="horizontal" mt="64px" mx="auto" w="90%" />
    </>
  );
};
