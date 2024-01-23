import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
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
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Slider {...settings}>
        {images.map(image => (
          <Box key={image.id} w="100%" h="100%" position="relative">
            <Box w="100%" objectFit="cover" position="relative">
              <Image
                display="block"
                w="100%"
                h="100%"
                objectFit="cover"
                src={isSmallerThan768 ? image.src.sp : image.src.pc}
                alt={image.alt}
              />
            </Box>
            <Box
              position="absolute"
              top="50%"
              left={{ base: '50%', lg: '256px' }}
              transform="translate(-50%, -50%)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize={{ base: '5xl', lg: 'xl' }}
                color="white"
                fontWeight="bold"
              >
                {image.text.main}
                <Box as="span" fontSize="xl" ml="16px">
                  {image.text.sub}
                </Box>
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent={{ base: 'none', lg: 'center' }}
              position="absolute"
              top={{ base: '60%', lg: '85%' }}
              left="50%"
              transform="translateX(-50%)"
              w="100%"
              color="white"
              fontWeight="bold"
              fontSize={{ base: 'md', lg: '2xl' }}
              textAlign="center"
            >
              <Text textAlign="center">日本からアジアへ</Text>
              <Text textAlign="center">そして世界へ</Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Text
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        bottom="3%"
        left="50%"
        transform="translateX(-50%)"
        color="white"
        css={{
          animation: 'scrollAnimation 1s ease-in-out infinite',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '-50px',
            transform: 'translateX(-50%)',
            height: '50px',
            width: '2px',
            backgroundColor: 'white',
          },
        }}
      >
        SCROLL
      </Text>
    </>
  );
};
