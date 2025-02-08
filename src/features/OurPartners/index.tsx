import { Title } from '@/components/Elements/Title';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { OurPartnerList } from './OurPartnerList';
import { OfficialMedia } from '../Top/OfficialMedia';

export const OurPartners = () => {
  // widthは適時いい感じにする
  const platinumImages = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-04.webp',
      width: '112px',
      link: 'https://www.blisstage.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-05.webp',
      width: '64px',
      link: 'https://www.hokuei-gr.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-polygonbike.png',
      width: '80px',
      link: 'https://www.polygonbikes.com/',
    },
  ];

  const goldImages = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-02.webp',
      width: '72px',
      link: 'https://www.3plmnt.co.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-07.webp',
      width: '96px',
      link: 'https://repetir.official.ec/?fbclid=IwAR3Fr4c0JcKGq6LNAaLSObOsWdLO-zIKLB7T7QCWYUhc_48O6zTuf8UC1fI',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-09.webp',
      width: '95px',
      link: 'https://yowapeda.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-revofish.png',
      width: '64px',
      link: 'https://www.revofish.com/',
    },
  ];

  const sliverImages = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-10.webp',
      width: '96px',
      link: 'https://www.ogkkabuto.co.jp/',
    },
  ];

  const bronzeImages = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-13.webp',
      width: '150px',
      link: 'https://www.hiroosangyo.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-03.webp',
      width: '80px',
      link: 'https://house-ws.com/',
    },
  ];

  const supporterImages = [
    {
      imagePath: '/images/top/ourPartners/img-sponsor-beespeed.png',
      width: '152px',
      link: 'https://www.beespeed.jp/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-12.webp',
      width: '152px',
      link: 'http://www.shibaken-inc.co.jp/',
    },
  ];

  const suppliersImages = [
    // TODO: 差し替えのHONDAの画像が来たら追加する
    {
      imagePath: '/images/top/ourPartners/img-sponsor-honda.png',
      width: '144px',
      link: 'https://www.honda-indonesia.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-11.jpg',
      width: '112px',
      link: 'https://www.maxxis.co.jp/',
    },
    // TODO: Foxのlinkを追加する
    {
      imagePath: '/images/top/ourPartners/img-sponsor-fox.png',
      width: '80px',
      link: '',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-raceface.png',
      width: '144px',
      link: 'https://www.raceface.com/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-pro-apparel.webp',
      width: '104px',
      link: 'https://www.proapparel.asia/',
    },
    {
      imagePath: '/images/top/ourPartners/img-sponsor-08.webp',
      width: '112px',
      link: 'https://www.innoracks.com/',
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
          <OurPartnerList title="Platinum" imagePath={platinumImages} />
          <OurPartnerList title="Gold" imagePath={goldImages} />
          <OurPartnerList title="Silver" imagePath={sliverImages} />
          <OurPartnerList title="Bronze" imagePath={bronzeImages} />
          <OurPartnerList title="Supporter" imagePath={supporterImages} />
          <Divider orientation="horizontal" mx="auto" w="100%" mb="40px" />
          <OurPartnerList title="Suppliers" imagePath={suppliersImages} />
        </MainLayout>
        <Box mt="121px">
          <OfficialMedia />
        </Box>
      </Box>
    </PageLayout>
  );
};
