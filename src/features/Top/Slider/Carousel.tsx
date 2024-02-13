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
  isMovie?: boolean;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
};

const images: images[] = [
  {
    id: 0,
    src: {
      sp: '/images/top/movie.mp4',
      pc: '/images/top/movie.mp4',
    },
    alt: 'スライド0',
    text: {
      main: 'TCS',
      sub: 'Racing Team',
    },
    isMovie: true,
  },
  {
    id: 1,
    src: {
      sp: '/images/top/img-slider01.webp',
      pc: '/images/top/img-slider01.webp',
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
      sp: '/images/top/img-slider02.webp',
      pc: '/images/top/img-slider02.webp',
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
      sp: '/images/top/img-slider03.webp',
      pc: '/images/top/img-slider03.webp',
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
          <Box
            key={image.id}
            w="100%"
            h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
            position="relative"
          >
            <Box
              w="100%"
              h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
              objectFit="cover"
              position="relative"
            >
              {image.isMovie ? (
                <>
                  <Image
                    src="/images/top/img-top-slider-filter.png"
                    display="block"
                    w="100%"
                    h={{ base: 'auto', lg: 'calc(100vh - 90px) !important' }}
                    objectFit="contain"
                    position="absolute"
                    top="0"
                    left="0"
                  />
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={
                      isSmallerThan768
                        ? { objectFit: 'cover', height: 'calc(100vh - 256px)' }
                        : { objectFit: 'cover', height: '100vh' }
                    }
                  >
                    <source
                      src={isSmallerThan768 ? image.src.sp : image.src.pc}
                      type="video/mp4"
                    />
                    お使いのブラウザはビデオタグをサポートしていません。
                  </video>
                </>
              ) : (
                <>
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="#000"
                    opacity={0.5}
                    zIndex="0"
                  />
                  <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="white"
                    fontSize="7vw" // ビューポート幅に基づいたフォントサイズ
                    fontWeight="bold"
                    textAlign="center"
                    bg={`url(${isSmallerThan768 ? image.src.sp : image.src.pc})`}
                    backgroundClip="text"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    pt="calc(100vh - 43vh)"
                    w="100%"
                    h="100%" // テキストの高さを調整
                  >
                    Asia Union TCS Racing Team
                  </Text>
                  <Image
                    display="block"
                    w="100%"
                    h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
                    objectFit={{ base: 'contain', lg: 'cover' }} // objectFitをcoverに変更
                    src={isSmallerThan768 ? image.src.sp : image.src.pc}
                    alt={image.alt}
                  />
                </>
              )}
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
        left="0"
        w="100vw"
        textAlign="center"
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
