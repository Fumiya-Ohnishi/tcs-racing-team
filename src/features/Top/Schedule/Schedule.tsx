import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, VStack } from '@chakra-ui/react';
import { ScheduleItem } from './ScheduleItem';
import { LinkButton } from '@/components/Elements/LinkButton';
import { useSchedule } from './hooks/useSchedule';
import { ScheduleTitle } from './components/ScheduleTitle';

export interface ScheduleItem {
  id: number;
  title: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export const Schedule = () => {
  const { raceScheduleList, eventScheduleList } = useSchedule();
  if (!raceScheduleList || !eventScheduleList) return <Box>データがありません。</Box>;

  return (
    <Box mb="117px">
      <MainLayout>
        <Box display={{ base: 'block', lg: 'flex' }} gap="64px" mb="70px">
          <Box flex="1" mb={{ base: '81px', lg: '0px' }}>
            <ScheduleTitle text="Race" />
            <VStack gap="24px" display="grid">
              {raceScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url="#"
                  title={item.title}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  location={item.location}
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
                  url="#"
                  title={item.title}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  location={item.location}
                />
              ))}
            </VStack>
          </Box>
        </Box>
        <LinkButton link="/staff" text="Overview" />
      </MainLayout>
    </Box>
  );
};
