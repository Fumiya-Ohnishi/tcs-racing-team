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
        mb="22.6px"
        cursor="pointer"
        boxShadow="10px -10px #626063"
        transition="box-shadow 0.3s ease"
        _hover={{ boxShadow: '15px -15px #626063' }}
      >
        <ImageFilter
          src={
            updateArray[0]?.eyecatch?.url || 'https://placehold.jp/150x150.png'
          }
          isHoverEffectEnabled={true}
        />
        <Box position="absolute" bottom="0" left="20px" zIndex="2">
          <HStack>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">{formattedPublishedAt}</Text>
          </HStack>
          <Text color="#fff">{updateArray[0]?.title}</Text>
          <Box maxH="200px" maxW="450px" overflow="hidden">
            <Text color="#fff">
              {updateArray.map((item, index) => (
                <Box
                  key={index}
                  as="span"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1, // 表示行数
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxHeight: '3em', // 最大の高さ
                  }}
                />
              ))}
            </Text>
          </Box>
          <LinkUnderBarButton url="#" text="もっと見る" />
        </Box>
      </Box>
    </>
  );
};
