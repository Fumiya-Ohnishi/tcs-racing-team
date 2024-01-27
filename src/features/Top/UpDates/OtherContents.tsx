import { Box, HStack, Text } from '@chakra-ui/react';
import { NewsItem } from './UpDateContents';
import { FC } from 'react';
import { format } from 'date-fns';

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
              {format((new Date(item.publishedAt)), 'yyyy-MM-dd')}
            </Text>
          </HStack>
          <Text color="#fff" mb="16px">
            {item.title}
          </Text>
          <Box maxH="200px" maxW="450px" overflow="hidden">
            <Text color="#fff" isTruncated>
              <Box
                as="span"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
};
