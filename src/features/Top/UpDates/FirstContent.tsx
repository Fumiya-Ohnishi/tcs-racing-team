import { ImageFilter } from '@/components/Elements/ImageFilter';
import { LinkUnderBarButton } from '@/components/Elements/LinkUnderBarButton';
import { Box, HStack, Text } from '@chakra-ui/react';

export const FirstContent = () => {
  return (
    <>
      <Box
        w="100%"
        position="relative"
        mb="22.6px"
        cursor="pointer"
        boxShadow="10px -10px #626063"
        transition="box-shadow 0.3s ease"
        _hover={{ boxShadow: '15px -15px #626063' }}
      >
        {/* <ImageFilter src="https://placehold.jp/150x150.png" /> */}
        <ImageFilter
          src="/images/img-theTeam-01.webp"
          isHoverEffectEnabled={true}
        />
        <Box position="absolute" bottom="0" left="20px" zIndex="2">
          <HStack>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">2023.12.11</Text>
          </HStack>
          <Text color="#fff">title</Text>
          <Box maxH="200px" maxW="450px" overflow="hidden">
            <Text color="#fff" isTruncated>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Text>
          </Box>
          <LinkUnderBarButton url="#" text="もっと見る" />
        </Box>
      </Box>
    </>
  );
};
