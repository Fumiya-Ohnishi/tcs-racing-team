import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, VStack } from '@chakra-ui/react';
import { ScheduleItem } from './ScheduleItem';
import { LinkButton } from '@/components/Elements/LinkButton';
import { useSchedule } from './hooks/useSchedule';
import { ScheduleTitle } from './components/ScheduleTitle';

interface ScheduleItem {
  id: number;
  url: string;
  raceName: string;
  date: string;
  month: string;
  country: string;
}

export const Schedule = () => {
  const { raceScheduleList, eventScheduleList } = useSchedule();

  return (
    <>
      <MainLayout>
        <Box display={{ base: 'block', lg: 'flex' }} gap="64px" mb="70px">
          <Box flex="1">
            <ScheduleTitle text="Race" />
            <VStack gap="24px" display="grid">
              {raceScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url='#'
                  raceName={item.title}
                  date="15-17"
                  month="12月"
                  country="オーストラリア"
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1">
            <ScheduleTitle text="Events" />
            <VStack gap="24px" display="grid">
              {eventScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url='#'
                  raceName={item.title}
                  date="15-17"
                  month="12月"
                  country="オーストラリア"
                />
              ))}
            </VStack>
          </Box>
        </Box>
        <LinkButton link="/staff" text="Overview" />
      </MainLayout>
    </>
  );
};
