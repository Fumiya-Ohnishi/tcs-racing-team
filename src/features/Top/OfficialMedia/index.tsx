import { SnsIcon } from '@/components/Elements/SnsIcon';
import { Box, HStack, Text } from '@chakra-ui/react';

export const OfficialMedia = () => {
  return (
    <Box textAlign="center">
      <Text
        fontSize={{ base: '24px', lg: '36px' }}
        fontWeight="bold"
        mb="66px"
        color="white"
      >
        Official Media
      </Text>
      <Box position="relative">
        <Text
          fontSize="5.8vw"
          fontWeight="bold"
          color="#1A1A1A"
          textShadow="1px 1px 0 #707070, -1px -1px 0 #707070, -1px 1px 0 #707070, 1px -1px 0 #707070, 0px 1px 0 #707070, 0 -1px 0 #707070, -1px 0 0 #707070, 1px 0 0 #707070"
        >
          Asia Union TCS Racing Team
        </Text>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          left="50%"
          top="5px"
          transform="translateX(-50%)"
          w={{ base: '50%', lg: '20%' }}
          mx="auto"
        >
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
