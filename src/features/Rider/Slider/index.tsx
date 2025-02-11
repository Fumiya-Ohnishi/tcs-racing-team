import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';
import { getOtherMembersList } from '@/constants';

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

export const MemberSlider = () => {
  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();

  const memberList = getOtherMembersList();

  const slider = isTablet ? (
    <SimpleGrid columns={2} spacing={10}>
      {memberList.map(member => (
        <Box key={member.id} w="100%" h="100%" pr="16px">
          <Box
            w="100%"
            objectFit="cover"
            cursor="pointer"
            onClick={() => {
              navigate(`/member-page/${member.id}`);
            }}
          >
            <Image
              display="block"
              w="100%"
              h="100%"
              objectFit="cover"
              src={member.gradationImagesPath}
              alt={member.nameJa}
            />
          </Box>
          <Text fontSize="16px" color="white" textAlign="center">
            {member.nameEn.toUpperCase()}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <Slider {...settings}>
      {memberList.map(member => (
        <Box key={member.id} w="23%" h="100%" pr="16px">
          <Box
            w="100%"
            objectFit="cover"
            cursor="pointer"
            onClick={() => {
              navigate(`/member-page/${member.id}`);
            }}
          >
            <Image
              display="block"
              w="100%"
              h="100%"
              objectFit="cover"
              src={member.gradationImagesPath}
              alt={member.nameJa}
            />
          </Box>
          <Text fontSize="16px" color="white" textAlign="center">
            {member.nameEn.toUpperCase()}
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
