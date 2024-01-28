import { ImageFilter } from '@/components/Elements/ImageFilter';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NewsItem } from './UpDateContents';
import { FC } from 'react';
import { format } from 'date-fns';

interface Props {
  updateArray: NewsItem[];
}

export const SecondContent: FC<Props> = ({ updateArray }) => {
  if (!updateArray) return <Box>データがありません。</Box>;

  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      {updateArray.map(item => (
        <Box
          key={item.id}
          position="relative"
          w={{ base: '100%', lg: 'calc(50% - 6px)' }}
          pb="50px"
          mb={{ base: '46px', lg: '12px' }}
          cursor="pointer"
          boxShadow="5px -5px #626063"
          transition="box-shadow 0.3s ease"
          _hover={{ boxShadow: '10px -10px #626063' }}
        >
          <ImageFilter
            src={
              item.eyecatch?.url ||
              'https://placehold.jp/30/A1A1A1/ffffff/300x150.png?text=Noi mage'
            }
            isHoverEffectEnabled={true}
          />
          <Box
            position="absolute"
            w="calc(100% - 20px)"
            bottom="0px"
            left="20px"
            zIndex="2"
          >
            <HStack>
              <Text color="#FF9080" fontSize={{ base: '12px', lg: '16px' }}>
                News |
              </Text>
              <Text color="#fff" fontSize={{ base: '12px', lg: '16px' }}>
                {format(new Date(item.publishedAt), 'yyyy.MM.dd')}
              </Text>
            </HStack>
            <Text color="#fff">{item.title}</Text>
            <Box
              maxH="200px"
              overflow="hidden"
              fontSize={{ base: '10px', lg: '16px' }}
              mb="20px"
            >
              <Box
                as="span"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxHeight: '3em',
                }}
              />
            </Box>
            <Link to="#" style={{ color: '#fff', display: 'inline-block' }}>
              <HStack borderBottom="solid 1px #FF9080">
                <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
                  もっと見る
                </Text>
                <Image
                  w="5px"
                  h="10px"
                  src="/images/ico-arrow-white-brock.svg"
                />
              </HStack>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
