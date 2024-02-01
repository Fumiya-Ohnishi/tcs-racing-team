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
      imagePath: '/images/top/ourPartners/img-sponsor-02.webp',
      width: '81px',
      link: 'https://www.3plmnt.co.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-03.webp',
      width: '85px',
      link: 'https://house-ws.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-04.webp',
      width: '115px',
      link: 'https://www.blisstage.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-05.webp',
      width: '72px',
      link: 'https://www.hokuei-gr.com/',
    },
  ];
  const imageArray02 = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-06.webp',
      width: '132px',
      link: 'https://wave-one.jp/corporation/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-07.webp',
      width: '104px',
      link: 'https://repetir.official.ec/?fbclid=IwAR3Fr4c0JcKGq6LNAaLSObOsWdLO-zIKLB7T7QCWYUhc_48O6zTuf8UC1fI',
    },
  ];

  const imageArray03 = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-08.webp',
      width: '136px',
      link: 'https://www.carmate.co.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-09.webp',
      width: '95px',
      link: 'https://yowapeda.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-10.webp',
      width: '117px',
      link: 'https://www.ogkkabuto.co.jp/',
    },
  ];
  const imageArray04 = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-12.webp',
      width: '150px',
      link: 'http://www.shibaken-inc.co.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-13.webp',
      width: '150px',
      link: 'https://www.hiroosangyo.jp/',
    },
  ];

  const imageArray05 = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-11.jpg',
      width: '136px',
      link: 'https://www.maxxis.co.jp/',
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
            <Link
              to="https://www.alpenblick-resort.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                position="relative"
                w={{ base: '100%', lg: '50%' }}
                maxW={{ base: '341px', lg: 'auto' }}
                bg="#fff"
                py="90px"
                px={{ base: '16px', lg: '88px' }}
                rounded="10px"
                _hover={{
                  '.arrow': {
                    transform: 'translateX(5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                  '.image': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box w="100%" objectFit="cover">
                  <Image
                    className="image"
                    src="images/top/ourPartners/img-sponsor-01.webp"
                    alt="black"
                    transition="transform 0.3s ease-in-out"
                  />
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

                  <Box
                    className="arrow"
                    display="flex"
                    alignItems="center"
                    ml="8px"
                    transition="transform 0.3s ease-in-out"
                  >
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
