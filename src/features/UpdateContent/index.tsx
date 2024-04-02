import { Title } from '@/components/Elements/Title';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { RelatedUpdates } from './RelatedUpdates';
import './style.css';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useSingleNewsContent } from './hooks/useSingleNewsContent';

export const UpdateContent = () => {
  const { id } = useParams();

  const { singleNews } = useSingleNewsContent(id || '');

  const [selectedLanguage] = useLanguage();

  return (
    <PageLayout>
      <Box
        mt={{ base: '110px', lg: '50px' }}
        w="100vw"
        objectFit="contain"
        position="relative"
      >
        <Image
          w="100%"
          display="block"
          src="/images/UpdateContent/img-UpdateContent-01.jpeg"
          alt="UpdateContent"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="#000"
          opacity={0.5}
          zIndex="1"
        />
      </Box>

      <Box
        position="relative"
        w="70%"
        mt="-50px"
        mb="120px"
        mx="auto"
        p="33px"
        bg="#fff"
        zIndex="2"
      >
        <HStack mb="38px">
          <Text
            color="#FF9080"
            fontSize={{ base: '12px', lg: '16px' }}
            fontWeight="bold"
          >
            News |
          </Text>
          <Text
            color="#000"
            fontSize={{ base: '12px', lg: '16px' }}
            fontWeight="bold"
          >
            {singleNews?.publishedAt && formatDate(singleNews.publishedAt)}
          </Text>
        </HStack>

        <Text
          color="#000"
          fontSize={{ base: '16px', lg: '36px' }}
          fontWeight="bold"
          mb="34px"
        >
          {singleNews?.[`title${selectedLanguage}`]}
        </Text>

        <Text
          color="#FF9080"
          fontSize={{ base: '16px', lg: '36px' }}
          mb="34px"
          fontWeight="bold"
        >
          News
        </Text>

        {singleNews?.[`content${selectedLanguage}`] && (
          <Box
            mb="37px"
            dangerouslySetInnerHTML={{
              __html: singleNews?.[`content${selectedLanguage}`],
            }}
          />
        )}

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: '90%', lg: '27%' }}
          mx="auto"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#000"
            w="27px"
            h="27px"
            rounded="50%"
            mr="18px"
          >
            <Image src="/images/contact/ico-youtube.svg" alt="contact" />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#000"
            w="27px"
            h="27px"
            rounded="50%"
            mr="18px"
          >
            <Image src="/images/contact/ico-facebook.svg" alt="contact" />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#000"
            w="27px"
            h="27px"
            rounded="50%"
            mr="18px"
          >
            <Image src="/images/contact/ico-Instagram.svg" alt="contact" />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#000"
            w="27px"
            h="27px"
            rounded="50%"
            mr="18px"
          >
            <Image src="/images/contact/ico-TikTok.svg" alt="contact" />
          </Box>
        </Box>
      </Box>

      <MainLayout>
        <Text
          color="#fff"
          fontSize={{ base: '24px', lg: '56px' }}
          fontWeight="bold"
          mb="42px"
        >
          Related Updates
        </Text>
        {id && <RelatedUpdates id={id} />}
      </MainLayout>

      <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
