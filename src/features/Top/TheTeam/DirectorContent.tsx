import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  post: string;
  name: string;
  comment: string;
};

export const DirectorContent: FC<Props> = ({ post, name, comment }) => {
  return (
    <Box
      position="relative"
      w="90%"
      m="0 auto"
      borderBottom="solid 1px"
      borderColor="#fff"
    >
      <Box w="86%" m="0 auto">
        <Box minH="457px" p="99px 0" position="relative">
          <Box
            position="absolute"
            top="50%"
            left="0"
            transform="translateY(-50%)"
            zIndex="2"
          >
            <Text color="#fff" mb="14px">
              {post}
            </Text>
            <Text color="#fff" mb="71px" fontWeight="bold" fontSize="52px">
              {name}
            </Text>
            <Text color="#fff">{comment}</Text>
          </Box>
          <Box position="absolute" bottom="0" right="0" w="50%">
            <Image src="/images/img-theTeam-01.webp" alt="director" />
          </Box>
          <Box
            position="absolute"
            bottom="50px"
            right="0"
            w="10px"
            h="36px"
            objectFit="cover"
          >
            <Image
              display="block"
              w="100%"
              src="/images/ico-arrow-white-brock.svg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
