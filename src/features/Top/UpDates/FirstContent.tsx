import { ImageFilter } from '@/components/Elements/ImageFilter';
import { LinkUnderBarButton } from '@/components/Elements/LinkUnderBarButton';
import { Box, HStack, Text } from '@chakra-ui/react';

export const FirstContent = () => {
  return (
    <>
      <Box w="100%" position="relative" mb="22.6px">
        <ImageFilter src="https://placehold.jp/150x150.png" />
        <Box position="absolute" bottom="0" left="20px" zIndex="2">
          <HStack>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">2023.12.11</Text>
          </HStack>
          <Text color="#fff">title</Text>
          <Text color="#fff" mb="18px">
            content
          </Text>
          <LinkUnderBarButton url="#" text="もっと見る" />
        </Box>
      </Box>
    </>
  );
};
