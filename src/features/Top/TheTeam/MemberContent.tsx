import { Box, Text, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  backgroundUrl: string;
  name: string;
  comment: React.ReactNode;
  imageUrl: string;
  width?: string;
  link: string;
}

export const MemberContent: FC<Props> = ({
  backgroundUrl,
  name,
  comment,
  imageUrl,
  width,
  link,
}) => {
  return (
    <Box
      w="calc(50% - 34px)"
      minH="276px"
      p="99px 0"
      position="relative"
      background={`url(${backgroundUrl})`}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Link to={link}>
        <Box
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          zIndex="2"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          pt="99px"
          pb="35px"
        >
          <Text color="#fff" mb="16px" fontWeight="bold" fontSize="24px">
            {name}
          </Text>
          <Box color="#fff" fontSize="12px">
            {comment}
          </Box>
        </Box>
        <Box position="absolute" bottom="0" right="0" w={width ? width : '70%'}>
          <Image src={imageUrl} alt="director" />
        </Box>
        <Box
          position="absolute"
          bottom="20px"
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
      </Link>
    </Box>
  );
};
