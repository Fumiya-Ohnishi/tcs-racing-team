import { Box, Text, Image } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LinkStyles.css';

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
  const imageRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.05)';
    }
    if (boxRef.current) {
      boxRef.current.style.right = '-10px';
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)';
    }
    if (boxRef.current) {
      boxRef.current.style.right = '0';
    }
  };
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
      <Link
        to={link}
        className="custom-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></Link>
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
      <Box
        position="absolute"
        bottom="0"
        right="0"
        w={width ? width : '70%'}
        maxW="316px"
        maxH="350px"
        overflow="hidden"
      >
        <Image
          ref={imageRef}
          src={imageUrl}
          alt="director"
          transition="transform 0.3s ease"
        />
      </Box>
      <Box
        ref={boxRef}
        position="absolute"
        bottom="20px"
        right="0"
        w="10px"
        h="36px"
        objectFit="cover"
        transition="right 0.3s ease"
      >
        <Image
          display="block"
          w="100%"
          src="/images/ico-arrow-white-brock.svg"
        />
      </Box>
    </Box>
  );
};
