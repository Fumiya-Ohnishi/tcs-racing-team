import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Text } from '@chakra-ui/react';
import './Carousel.css';

interface images {
  id: number;
  src: {
    sp: string;
    pc: string;
  };
  alt: string;
  text: {
    main: string;
    sub: string;
  };
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
};

const images: images[] = [
  {
    id: 1,
    src: {
      sp: '/images/img-slide1-sp.jpg',
      pc: '/images/img-slide1-pc.jpg',
    },
    alt: 'スライド1',
    text: {
      main: 'TCS',
      sub: 'Racing Team',
    },
  },
  {
    id: 2,
    src: {
      sp: '/images/img-slide1-sp.jpg',
      pc: '/images/img-slide1-pc.jpg',
    },
    alt: 'スライド2',
    text: {
      main: 'TCS',
      sub: 'Racing Team',
    },
  },
  {
    id: 3,
    src: {
      sp: '/images/img-slide1-sp.jpg',
      pc: '/images/img-slide1-pc.jpg',
    },
    alt: 'スライド3',
    text: {
      main: 'TCS',
      sub: 'Racing Team',
    },
  },
];

export const Carousel = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      overflowX="hidden"
      boxSize="fit-content"
      color="white"
    >
      <Slider {...settings}>
        {images.map(image => (
          <Box
            key={image.id}
            w="100vw"
            h="100vh"
            backgroundImage={{
              base: `url(${image.src.sp})`,
              lg: `url(${image.src.pc})`,
            }}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            overflow="hidden"
            position="relative"
          >
            <Box
              position="absolute"
              top="50%"
              left={{ base: '50%', lg: '256px' }}
              transform="translate(-50%, -50%)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">
                {image.text.main}
                <Box as="span">{image.text.sub}</Box>
              </Text>
            </Box>
            <Box position="relative" display={{ base: 'none', lg: 'block' }}>
              <Text
                position="absolute"
                bottom="12%"
                left="50%"
                css={{
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: '-50px',
                    transform: 'translateX(-50%)',
                    height: '50px', // 線の高さ
                    width: '2px', // 線の幅
                    backgroundColor: 'white', // 線の色
                  },
                }}
              >
                SCROLL
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
