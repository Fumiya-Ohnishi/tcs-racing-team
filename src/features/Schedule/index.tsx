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
      <Box display={{ base: 'block', lg: 'none' }} mb="64px">
        <Image src="/images/rider/img-top-sp.webp" mt="108px" />
      </Box>
      <Box display={{ base: 'none', lg: 'block' }} mb="128px">
        <Image src="/images/schedule/img-schedule-top.jpg" w="100%" />
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
