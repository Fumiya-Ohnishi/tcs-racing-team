import { Box, Text, Image, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  imagePath: {
    imagePath: string;
    width: string;
  }[];
}

export const OurPartnerList: FC<Props> = ({ title, imagePath }) => {
  const imageContent = imagePath.map((image, index) => (
    <Link to="#" key={index}>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#fff"
        minH="153px"
        rounded="10px"
      >
        <Box w={image.width} maxW="131px" objectFit="contain">
          {image.imagePath !== '' && (
            <Image src={image.imagePath} alt="black" />
          )}
        </Box>
        <Box
          position="absolute"
          bottom="14px"
          left="21px"
          display="flex"
          alignItems="center"
        >
          <Text color="#000" fontSize="16px" fontWeight="bold">
            Read more
          </Text>
          <Box display="flex" alignItems="center" ml="8px">
            <Image src="images/ico-arrow-brock.svg" alt="arrow" />
          </Box>
        </Box>
      </Box>
    </Link>
  ));
  return (
    <Box mb="47px">
      <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
        {title}
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap="6px"
      >
        {imageContent}
      </Grid>
    </Box>
  );
};
