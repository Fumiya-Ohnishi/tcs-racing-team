import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import './Carousel.css';

interface images {
  id: number;
  src: string;
  alt: string;
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
    src: '/images/slide1.jpg',
    alt: 'スライド1',
  },
  {
    id: 2,
    src: '/images/slide1.jpg',
    alt: 'スライド2',
  },
  {
    id: 3,
    src: '/images/slide1.jpg',
    alt: 'スライド3',
  },
];

export const Carousel = () => {
  return (
    <Box w="100vw" h="100vh" overflowX="hidden" boxSize="fit-content">
      <Slider {...settings}>
        {images.map(image => (
          <Box
            key={image.id}
            w="100vw"
            h="100vh"
            background={`url(${image.src})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            overflow="hidden"
          ></Box>
        ))}
      </Slider>
    </Box>
  );
};
