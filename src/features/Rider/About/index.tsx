import { Box, Image, Text } from '@chakra-ui/react';

export const About = () => {
  return (
    <Box w="88%" ml="auto" mb="132px" position="relative">
      <Box w="50%" ml="auto" objectFit="cover">
        <Image w="100%" src="/images/rider/img-top-rider-02.webp" alt="Rider" />
      </Box>
      <Box
        position="absolute"
        top="0"
        right="0"
        w="50%"
        h="100%"
        bgGradient="linear(to-r, #1A1A1A, transparent)"
      />
      <Box color="#fff" w="60%" position="absolute" top="10px" left="0">
        <Text fontSize="35px" fontWeight="bold" mb="65px">
          About Eusebia Nicole
        </Text>
        <Text lineHeight="2">
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        </Text>
      </Box>
    </Box>
  );
};
