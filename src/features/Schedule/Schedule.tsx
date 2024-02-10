import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, VStack } from '@chakra-ui/react';
import { ScheduleItem } from '@/components/Elements/ScheduleItem';
import { ScheduleTitle } from './components/ScheduleTitle';
import { useGetSchedule } from '@/shared/hooks/useGetSchedule';
import { useLanguage } from '@/state/languageState/useLanguage';

export interface ScheduleItem {
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
}

const limit = 12;

export const Schedule = () => {
  const { raceScheduleList, eventScheduleList } = useGetSchedule({ limit });
  if (!raceScheduleList || !eventScheduleList)
    return <Box>データがありません。</Box>;
  const [selectedLanguage] = useLanguage();

  return (
    <Box mb="117px">
      <MainLayout>
        <Box display={{ base: 'block', lg: 'flex' }} gap="64px" mb="70px">
          <Box flex="1" mb={{ base: '81px', lg: '0px' }}>
            <ScheduleTitle text="Race" />
            <VStack gap="24px" display="grid">
              {raceScheduleList.length === 0 && (
                <Box color="white">Coming soon..</Box>
              )}
              {raceScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1">
            <ScheduleTitle text="Events" />
            <VStack gap="24px" display="grid">
              {eventScheduleList.length === 0 && (
                <Box color="white">Coming soon..</Box>
              )}
              {eventScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </VStack>
          </Box>
        </Box>
      </MainLayout>
    </Box>
  );
};
