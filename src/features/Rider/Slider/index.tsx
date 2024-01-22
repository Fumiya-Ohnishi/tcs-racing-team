import { Box, Text, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const images: images[] = [
  {
    id: 1,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: 2,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: 3,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: 4,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: 5,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: 6,
    imgPath: '/images/rider/img-top-rider-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

interface images {
  id: number;
  imgPath: string;
  alt: string;
  text: string;
}

export const MemberSlider = () => {
  return (
    <Box mb="139px">
      <Text fontSize="34px" fontWeight="bold" textAlign="center" mb="88px">
        Other Members
      </Text>
      <Slider {...settings}>
        {images.map(image => (
          <Box key={image.id} w="23%" h="100%">
            <Box w="100%" objectFit="cover">
              <Image
                display="block"
                w="100%"
                h="100%"
                objectFit="cover"
                src={image.imgPath}
                alt={image.alt}
              />
            </Box>
            <Text fontSize="16px" color="white" textAlign="center">
              {image.text}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
