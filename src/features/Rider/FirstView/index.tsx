import { SnsIcon } from '@/components/Elements/SnsIcon';
import { HStack, Box, Image, Text, useMediaQuery } from '@chakra-ui/react';

export const FirstView = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  // PC用とスマートフォン用の画像パス
  const imagePath = isMobile
    ? '/images/rider/img-top-sp.webp' // スマートフォン用の画像パス
    : '/images/rider/img-top-pc.webp'; // PC用の画像パス
  return (
    <Box
      position="relative"
      w="100vw"
      h={{ base: 'calc(100vh - 110px)', lg: 'calc(100vh - 52px)' }}
      color="#fff "
      mb="16px"
      mt={{ base: '110px', lg: '50px' }}
      overflowX={{ base: 'hidden', lg: 'visible' }}
    >
      <Box w="100vw" h={{ base: 'auto', lg: '90vh' }}>
        <Image src={imagePath} alt="Rider" />
      </Box>
      <Box
        position="absolute"
        bottom={{ base: 'auto', lg: '0' }}
        left={{ base: 'auto', lg: '60%' }}
        top={{ base: '40%', lg: 'auto' }}
        right={{ base: '-30px', lg: 'auto' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateX(-40%)' }}
        width={{ base: '80%', lg: 'auto' }}
        h={{ base: 'auto', lg: '100%' }}
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
        right={{ base: 'auto', lg: '100px' }}
        left={{ base: '10%', lg: 'auto' }}
        top={{ base: '40%', lg: '50%' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateY(-50%)' }}
        textAlign="center"
      >
        <Text fontSize={{ base: '16px', lg: '32px' }} fontWeight="bold">
          熱狂的に/Go Crazy
        </Text>
        <Text fontSize={{ base: '10px', lg: '24px' }}>-前進・革新・熱心-</Text>
      </Box>
      <Box
        position="absolute"
        bottom={{ base: '165px', lg: '0' }}
        left="50%"
        w="76%"
        transform="translateX(-50%)"
      >
        <Box
          mb="45px"
          fontSize={{ base: '36px', lg: '100px' }}
          fontWeight="bold"
        >
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
