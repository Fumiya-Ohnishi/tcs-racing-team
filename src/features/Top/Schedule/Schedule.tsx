import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { ScheduleItem } from './ScheduleItem';
import { LinkButton } from '@/components/Elements/LinkButton';

interface ScheduleProps {
  text: string;
}

interface ScheduleItem {
  id: number;
  url: string;
  raceName: string;
  date: string;
  month: string;
  country: string;
}

const scheduleItem: ScheduleItem[] = [
  {
    id: 1,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
  {
    id: 2,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
  {
    id: 3,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
  {
    id: 4,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
  {
    id: 5,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
  {
    id: 6,
    url: '#',
    raceName: 'レース名が入りますレース名が入りますレース名が入ります',
    date: '15-17',
    month: '12月',
    country: 'オーストラリア',
  },
];

export const Schedule = () => {
  const ScheduleTitle = ({ text }: ScheduleProps) => {
    return (
      <HStack borderBottom="solid 1px #83B833" display="inline-block" mb="16px">
        <Text color="#fff" fontSize="22px">
          {text}
        </Text>
      </HStack>
    );
  };

  return (
    <Box mb="117px">
      <MainLayout>
        <Box display={{ base: 'block', lg: 'flex' }} gap="64px" mb="70px">
          <Box flex="1" mb={{ base: '81px', lg: '0px' }}>
            <ScheduleTitle text="Race" />
            <VStack gap="24px" display="grid">
              {scheduleItem.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  raceName={item.raceName}
                  date={item.date}
                  month={item.month}
                  country={item.country}
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1">
            <ScheduleTitle text="Events" />
            <VStack gap="24px" display="grid">
              {scheduleItem.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  raceName={item.raceName}
                  date={item.date}
                  month={item.month}
                  country={item.country}
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
