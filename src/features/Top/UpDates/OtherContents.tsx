import { Box, HStack, Text } from '@chakra-ui/react';
import { NewsItem } from './UpDateContents';
import { FC } from 'react';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';

interface Props {
  updateArray: NewsItem[];
}

export const OtherContents: FC<Props> = ({ updateArray }) => {
  if (!updateArray) return <Box>データがありません。</Box>;
  return (
    <>
      {updateArray.map(item => (
        <Box
          key={item.id}
          borderBottom="solid 1px"
          borderColor="#fff"
          mb="16px"
          cursor="pointer"
        >
          <HStack mb="16px">
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">
              {formatDate(item.publishedAt)}
            </Text>
          </HStack>
          <Text color="#fff" mb="16px">
            {item.title}
          </Text>
          <Box maxH="200px" overflow="hidden">
            <Text color="#fff">
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
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
};
