import { ImageFilter } from '@/components/Elements/ImageFilter';
import { LinkUnderBarButton } from '@/components/Elements/LinkUnderBarButton';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { NewsItem } from './UpDateContents';
import { format } from 'date-fns';

interface Props {
  updateArray: NewsItem[];
}

export const FirstContent: FC<Props> = ({ updateArray }) => {
  if (!updateArray[0] || !updateArray[0].publishedAt)
    return <Box>データがありません。</Box>;

  const publishedAtDate = new Date(updateArray[0].publishedAt);
  const formattedPublishedAt = format(publishedAtDate, 'yyyy.MM.dd');

  return (
    <>
      <Box
        w="100%"
        position="relative"
        mb={{ base: '46px', lg: '22.6px' }}
        cursor="pointer"
        boxShadow="10px -10px #626063"
        transition="box-shadow 0.3s ease"
        _hover={{ boxShadow: '15px -15px #626063' }}
      >
        <ImageFilter
          src={
            updateArray[0].eyecatch?.url ||
            'https://placehold.jp/30/A1A1A1/ffffff/300x150.png?text=Noi mage'
          }
          isHoverEffectEnabled={true}
        />
        <Box position="absolute" bottom="0" left="20px" zIndex="2">
          <HStack>
            <Text color="#FF9080" fontSize={{ base: '12px', lg: '16px' }}>
              News |
            </Text>
            <Text color="#fff" fontSize={{ base: '12px', lg: '16px' }}>
              {formattedPublishedAt}
            </Text>
          </HStack>
          <Text color="#fff">{updateArray[0]?.title}</Text>
          <Box
            maxH="200px"
            maxW="450px"
            overflow="hidden"
            color="#fff"
            fontSize={{ base: '10px', lg: '16px' }}
            mb="20px"
          >
            {updateArray.map((item, index) => (
              <Box
                key={index}
                as="span"
                dangerouslySetInnerHTML={{ __html: item.content }}
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxHeight: '3em',
                }}
              />
            ))}
          </Box>
          <LinkUnderBarButton url="#" text="もっと見る" />
        </Box>
      </Box>
    </>
  );
};
