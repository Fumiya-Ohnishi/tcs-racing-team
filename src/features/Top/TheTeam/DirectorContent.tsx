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
      w="100%"
      bg="red"
      background={`linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.8),rgba(0, 0, 0, 0.3)), url(/images/img-lattice-background.webp)`}
      backgroundSize="80%"
    >
      <Box
        position="relative"
        w={{ base: '71%', lg: '90%' }}
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
          <Box
            minH={{ base: '150px', lg: '457px' }}
            p="99px 0"
            position="relative"
          >
            <Box
              position="absolute"
              top="50%"
              left="0"
              transform="translateY(-50%)"
              zIndex="2"
            >
              <Text
                color="#fff"
                mb={{ base: '8px', lg: '14px' }}
                fontSize={{ base: '10px', lg: '16px' }}
              >
                {post}
              </Text>
              <Text
                color="#fff"
                mb="71px"
                fontWeight="bold"
                fontSize={{ base: '24px', lg: '52px' }}
              >
                {name}
              </Text>
              <Text
                color="#fff"
                fontSize={{ base: '12px', lg: '16px' }}
                w={{ base: '50%', lg: '100%' }}
              >
                {comment}
              </Text>
            </Box>
            <Box
              position="absolute"
              bottom="0"
              right={{ base: '-60px', lg: '0' }}
              w={{ base: '100%', lg: '50%' }}
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
    </Box>
  );
};
