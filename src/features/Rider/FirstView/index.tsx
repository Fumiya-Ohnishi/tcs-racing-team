import { SnsIcon } from '@/components/Elements/SnsIcon';
import { HStack, Box, Image, Text } from '@chakra-ui/react';

export const FirstView = () => {
  return (
    <Box
      position="relative"
      w="100vw"
      h="calc(100vh - 52px)"
      color="#fff "
      mb="16px"
    >
      <Box w="100vw" h="90vh">
        <Image src="/images/rider/img-top-pc.webp" alt="Rider" />
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="60%"
        transform="translateX(-40%)"
        h="100%"
        objectFit="contain"
      >
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          src="/images/rider/img-top-rider-01.webp"
          alt="Rider"
        />
      </Box>
      <Box
        position="absolute"
        right="100px"
        top="50%"
        transform="translateY(-50%)"
        textAlign="center"
      >
        <Text fontSize="32px" fontWeight="bold">
          熱狂的に/Go Crazy
        </Text>
        <Text fontSize="24px">-前進・革新・熱心-</Text>
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="50%"
        w="76%"
        transform="translateX(-50%)"
      >
        <Box mb="45px" fontSize="100px" fontWeight="bold">
          <Text>YAMAMOTO</Text>
          <Text>KOHEI</Text>
        </Box>
        <HStack alignItems="center" justifyContent="space-between" w="20%">
          <SnsIcon href="#" icon="images/ico-facebook.webp" label="Facebook" />
          <SnsIcon
            href="#"
            icon="images/ico-Instagram.webp"
            label="Instagram"
          />
          <SnsIcon href="#" icon="images/ico-YouTube.webp" label="YouTube" />
          <SnsIcon href="#" icon="images/ico-TikTok.webp" label="TikTok" />
        </HStack>
      </Box>
    </Box>
  );
};
