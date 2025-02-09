import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';

const images: images[] = [
  {
    id: '0',
    imgPath: '/images/rider/img-member-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
  },
  {
    id: '1',
    imgPath: '/images/rider/img-member-02.webp',
    alt: 'スライド2',
    text: 'YUSUKE FUKUMITSU',
  },
  {
    id: '2',
    imgPath: '/images/rider/img-member-03.webp',
    alt: 'スライド3',
    text: 'RIYADH HAKIM',
  },
  {
    id: '3',
    imgPath: '/images/rider/img-member-04.webp',
    alt: 'スライド4',
    text: 'SAYU BELLA',
  },
  {
    id: '4',
    imgPath: '/images/rider/img-member-05.webp',
    alt: 'スライド5',
    text: 'YUTA MATSUMOTO',
  },
  {
    id: '5',
    imgPath: '/images/rider/img-member-06.webp',
    alt: 'スライド6',
    text: 'EUSEBIA NICOLE',
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
  id: string;
  imgPath: string;
  alt: string;
  text: string;
}

export const MemberSlider = () => {
  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();

  const slider = isTablet ? (
    <SimpleGrid columns={2} spacing={10}>
      {images.map(image => (
        <Box key={image.id} w="100%" h="100%" pr="16px">
          <Box
            w="100%"
            objectFit="cover"
            onClick={() => {
              navigate(`/member-page/${image.id}`);
            }}
          >
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
    </SimpleGrid>
  ) : (
    <Slider {...settings}>
      {images.map(image => (
        <Box key={image.id} w="23%" h="100%" pr="16px">
          <Box
            w="100%"
            objectFit="cover"
            cursor="pointer"
            onClick={() => {
              navigate(`/member-page/${image.id}`);
            }}
          >
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
  );

  return (
    <Box mb="139px">
      <Text fontSize="34px" fontWeight="bold" textAlign="center" mb="88px">
        Other Members
      </Text>
      {slider}
    </Box>
  );
};
