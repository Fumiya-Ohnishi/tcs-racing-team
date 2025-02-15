import { Box, Text, Image } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LinkStyles.css';

interface Props {
  // TODO: 国旗の画像が追加されたらbackgroundUrlを必須にする
  backgroundUrl?: string;
  name: string;
  comment: React.ReactNode;
  imageUrl: string;
  width?: string;
  link: string;
  id: string;
}

export const MemberContent: FC<Props> = ({
  backgroundUrl,
  name,
  comment,
  imageUrl,
  width,
  link,
  id,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLImageElement>(null);

  const navigate = useNavigate();

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
      w={{ base: '100%', lg: 'calc(50% - 34px)' }}
      minH="276px"
      p="99px 0"
      position="relative"
      background={`url(${backgroundUrl})`}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderBottom={{ base: 'solid 1px', lg: 'none' }}
      borderColor="#fff"
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        navigate(`${link}`);
      }}
    >
      <Box
        position="absolute"
        left="0"
        bottom="30px"
        zIndex="2"
        display="flex"
        flexDirection="column"
      >
        <Text
          color="#fff"
          mb="16px"
          fontWeight="bold"
          fontSize={{ base: '14px', lg: '24px' }}
        >
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
        // TODO: 後でid8,9,10の条件分岐を削除する
        w={{
          base:
            id === '8' || id === '9' || id === '10' ? '100%' : width || '100%',
          lg: id === '8' || id === '9' || id === '10' ? '70%' : width || '70%',
        }}
        maxW="316px"
        maxH="350px"
        overflow="hidden"
        aspectRatio="1097 / 880"
      >
        <Image
          ref={imageRef}
          src={imageUrl}
          alt="director"
          transition="transform 0.3s ease"
          h="100%"
          mx="auto"
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
          src="/images/common/ico-arrow-white-brock.svg"
        />
      </Box>
    </Box>
  );
};
