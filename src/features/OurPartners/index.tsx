import { Title } from '@/components/Elements/Title';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { OurPartnerList } from './OurPartnerList';
import { OfficialMedia } from '../Top/OfficialMedia';

export const OurPartners = () => {
  const imageArray01 = [
    {
      imagePath: 'images/img-sponsor-02.webp',
      width: '81px',
    },
    {
      imagePath: 'images/img-sponsor-03.webp',
      width: '85px',
    },
    {
      imagePath: 'images/img-sponsor-04.webp',
      width: '115px',
    },
    {
      imagePath: 'images/img-sponsor-05.webp',
      width: '72px',
    },
  ];
  const imageArray02 = [
    {
      imagePath: 'images/img-sponsor-06.webp',
      width: '132px',
    },
    {
      imagePath: 'images/img-sponsor-07.webp',
      width: '104px',
    },
  ];

  const imageArray03 = [
    {
      imagePath: 'images/img-sponsor-08.webp',
      width: '136px',
    },
    {
      imagePath: 'images/img-sponsor-09.webp',
      width: '95px',
    },
    {
      imagePath: 'images/img-sponsor-10.webp',
      width: '117px',
    },
  ];
  const imageArray04 = [
    {
      imagePath: '',
      width: '136px',
    },
    {
      imagePath: '',
      width: '95px',
    },
  ];

  const imageArray05 = [
    {
      imagePath: 'images/img-sponsor-11.jpg',
      width: '136px',
    },
  ];

  return (
    <PageLayout>
      <Box pt="110px" bg="#1a1a1a">
        <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
        <MainLayout>
          <Box mt="72px" mb="47px">
            <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
              Black
            </Text>
            <Link to="#">
              <Box
                position="relative"
                w={{ base: '100%', lg: '50%' }}
                maxW={{ base: '341px', lg: 'auto' }}
                bg="#fff"
                py="90px"
                px={{ base: '16px', lg: '88px' }}
                rounded="10px"
              >
                <Box w="100%" objectFit="cover">
                  <Image src="images/img-sponsor-01.webp" alt="black" />
                </Box>
                <Box
                  position="absolute"
                  bottom="14px"
                  left="21px"
                  display="flex"
                  alignItems="center"
                >
                  <Text color="#000" fontSize="16px" fontWeight="bold">
                    Read more
                  </Text>
                  <Box display="flex" alignItems="center" ml="8px">
                    <Image src="images/ico-arrow-brock.svg" alt="arrow" />
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
          <OurPartnerList title="Platinum" imagePath={imageArray01} />
          <OurPartnerList title="Gold" imagePath={imageArray02} />
          <OurPartnerList title="Silver" imagePath={imageArray03} />
          <OurPartnerList title="Bronze" imagePath={imageArray04} />
          <Divider orientation="horizontal" mx="auto" w="100%" mb="40px" />
          <OurPartnerList title="Suppliers" imagePath={imageArray05} />
        </MainLayout>
        <Box mt="121px">
          <OfficialMedia />
        </Box>
      </Box>
    </PageLayout>
  );
};
