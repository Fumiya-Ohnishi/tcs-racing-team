import { PageLayout } from '@/components/Layouts/PageLayout';
import { Title } from '@/components/Elements/Title';
import { Box, Grid, Image } from '@chakra-ui/react';
import { Schedule } from './Schedule';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { WinCounter } from './WinCounter';

const winCounterData = [
  {
    id: 1,
    name: 'first',
    count: 0,
    text: 'Wins by World Tour team in 2024',
  },
  {
    id: 2,
    name: 'second',
    count: 0,
    text: 'Lease a Bike Development Team in 2024',
  },
  {
    id: 3,
    name: 'third',
    count: 0,
    text: 'Wins by World Tour team in 2024',
    isLastContent: true,
  },
];

export const ScheduleComponent = () => {
  return (
    <PageLayout>
      <Box
        position="relative"
        display={{ base: 'block', lg: 'none' }}
        h={{ base: 'auto', lg: 'calc(100vh - 55px)' }}
        mb="64px"
      >
        <Image
          src="/images/rider/img-top-sp.webp"
          mt="108px"
          objectFit="contain"
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
        display={{ base: 'none', lg: 'block' }}
        h={{ base: 'auto', lg: 'calc(100vh - 55px)' }}
        mb="128px"
        mt="52px"
      >
        <Image src="/images/schedule/img-schedule-top.jpg" w="100%" h="100%" objectFit="cover" />
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
      <Title title="Schedule" subTitle="Schedule" />
      <Schedule />
      <MainLayout>
        <Box mb={{ base: '144px', lg: '192px' }}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={0}
            color="#FFF"
            fontWeight="bold"
          >
            {winCounterData.map(item => (
              <WinCounter
                key={item.id}
                count={item.count}
                text={item.text}
                isLastContent={item.isLastContent}
              />
            ))}
          </Grid>
        </Box>
      </MainLayout>
      <Title title="Our partners" subTitle="Our partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
