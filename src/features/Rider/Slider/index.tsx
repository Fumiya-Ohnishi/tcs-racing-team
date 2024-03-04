import { Box, Text, Image, useMediaQuery, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';

const images: images[] = [
  {
    id: 1,
    imgPath: '/images/rider/img-member-01.webp',
    alt: 'スライド1',
    text: 'KOHEI YAMAMOTO',
    linkId: 0,
  },
  {
    id: 2,
    imgPath: '/images/rider/img-member-02.webp',
    alt: 'スライド2',
    text: 'FUKUMITSU YUSUKE',
    linkId: 1,
  },
  {
    id: 3,
    imgPath: '/images/rider/img-member-03.webp',
    alt: 'スライド3',
    text: 'RIYADH HAKIM',
    linkId: 2,
  },
  {
    id: 4,
    imgPath: '/images/rider/img-member-04.webp',
    alt: 'スライド4',
    text: 'SAYU BELLA',
    linkId: 3,
  },
  {
    id: 5,
    imgPath: '/images/rider/img-member-05.webp',
    alt: 'スライド5',
    text: 'MATSUMOTO YUTA',
    linkId: 4,
  },
  {
    id: 6,
    imgPath: '/images/rider/img-member-06.webp',
    alt: 'スライド6',
    text: 'EUSEBIA NICOLE',
    linkId: 5,
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
  linkId: number;
  alt: string;
  text: string;
}

export const MemberSlider = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const slider = isMobile ? (
    <SimpleGrid columns={2} spacing={10}>
      {images.map(image => (
        <Box key={image.id} w="100%" h="100%" pr="16px">
          <Box
            w="100%"
            objectFit="cover"
            onClick={() => {
              navigate('/member-page', {
                state: { id: image.linkId },
              });
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
              navigate('/member-page', {
                state: { id: image.linkId },
              });
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
