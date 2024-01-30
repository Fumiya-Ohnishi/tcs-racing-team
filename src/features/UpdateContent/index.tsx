import { Title } from '@/components/Elements/Title';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { RelatedUpdates } from './RelatedUpdates';
import './style.css';

export const UpdateContent = () => {
  const location = useLocation();
  const updateArray = location.state.item;

  console.log(updateArray);

  return (
    <PageLayout>
      <Box mt={{ base: '110px', lg: '50px' }}>
        <Image
          src="/images/UpdateContent/img-UpdateContent-01.jpg"
          alt="UpdateContent"
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
            {formatDate(updateArray.publishedAt)}
          </Text>
        </HStack>

        <Text
          color="#000"
          fontSize={{ base: '16px', lg: '36px' }}
          fontWeight="bold"
          mb="34px"
        >
          {updateArray.title}
        </Text>

        <Text
          color="#FF9080"
          fontSize={{ base: '16px', lg: '36px' }}
          mb="34px"
          fontWeight="bold"
        >
          News
        </Text>

        <Box
          mb="37px"
          dangerouslySetInnerHTML={{ __html: updateArray.content }}
        />

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
        <RelatedUpdates id={updateArray.id} />
      </MainLayout>

      <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
