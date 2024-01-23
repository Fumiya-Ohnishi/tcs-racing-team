import { Box, Image, Text } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  post: string;
  name: string;
  comment: string;
  link: string;
};

export const DirectorContent: FC<Props> = ({ post, name, comment, link }) => {
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
      position="relative"
      w="90%"
      m="0 auto"
      borderBottom="solid 1px"
      borderColor="#fff"
    >
      <Link
        to={link}
        className="custom-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></Link>
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
          <Box
            position="absolute"
            bottom="0"
            right="0"
            w="50%"
            overflow="hidden"
          >
            <Image
              ref={imageRef}
              src="/images/img-theTeam-01.webp"
              alt="director"
              transition="transform 0.3s ease"
            />
          </Box>
          <Box
            ref={boxRef}
            position="absolute"
            bottom="50px"
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
      </Box>
    </Box>
  );
};
