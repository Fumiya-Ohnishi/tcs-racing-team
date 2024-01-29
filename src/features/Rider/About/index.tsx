import { Box, Image, Text } from '@chakra-ui/react';

export const About = () => {
  return (
    <Box
      w={{ base: '100%', lg: '88%' }}
      ml="auto"
      mb="132px"
      position="relative"
    >
      <Box display={{ base: 'flex', lg: 'none' }} justifyContent="center">
        <Text
          position="relative"
          display="inline-block"
          mb="65px"
          pb="8px"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          sx={{
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0%',
              width: '15%',
              height: '3px',
              backgroundImage: 'url(images/img-text-bg.webp)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
          }}
        >
          About Eusebia Nicole
        </Text>
      </Box>

      <Box
        w={{ base: '100%', lg: '50%' }}
        ml="auto"
        mb={{ base: '16px', lg: '0' }}
        objectFit="cover"
      >
        <Image w="100%" src="/images/rider/img-top-rider-02.webp" alt="Rider" />
      </Box>
      <Box
        position="absolute"
        top="0"
        right="0"
        w="50%"
        h="100%"
        bgGradient="linear(to-r, #1A1A1A, transparent)"
        display={{ base: 'none', lg: 'block' }}
      />
      <Box
        color="#fff"
        w={{ base: '88%', lg: '60%' }}
        position={{ base: 'unset', lg: 'absolute' }}
        top="10px"
        left="0"
        mx={{ base: 'auto', lg: '0' }}
      >
        <Text
          fontSize="35px"
          fontWeight="bold"
          mb="65px"
          display={{ base: 'none', lg: 'block' }}
        >
          About Eusebia Nicole
        </Text>
        <Text lineHeight="2">
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        </Text>
      </Box>
    </Box>
  );
};
