import { ImageFilter } from '@/components/Elements/ImageFilter';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const SecondContent = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box position="relative" w="calc(50% - 6px)" pb="50px">
        <ImageFilter src="https://placehold.jp/150x150.png" />
        <Box
          position="absolute"
          w="calc(100% - 20px)"
          bottom="-50px"
          left="20px"
          zIndex="2"
        >
          <HStack>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">2023.12.11</Text>
          </HStack>
          <Text color="#fff">title</Text>
          <Text color="#fff">
            contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
          </Text>
          <Link to="#" style={{ color: '#fff', display: 'inline-block' }}>
            <HStack borderBottom="solid 1px #FF9080">
              <Text color="#fff" fontSize="12px">
                もっと見る
              </Text>
              <Image w="5px" h="10px" src="/images/ico-arrow-white-brock.svg" />
            </HStack>
          </Link>
        </Box>
      </Box>
      <Box position="relative" w="calc(50% - 6px)" pb="50px">
        <ImageFilter src="https://placehold.jp/150x150.png" />
        <Box
          position="absolute"
          bottom="-50px"
          left="20px"
          w="calc(100% - 20px)"
          zIndex="2"
        >
          <HStack>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">2023.12.11</Text>
          </HStack>
          <Text color="#fff">title</Text>
          <Text color="#fff">
            contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
          </Text>
          <Link to="#" style={{ color: '#fff', display: 'inline-block' }}>
            <HStack borderBottom="solid 1px #FF9080">
              <Text color="#fff" fontSize="12px">
                もっと見る
              </Text>
              <Image w="5px" h="10px" src="/images/ico-arrow-white-brock.svg" />
            </HStack>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
