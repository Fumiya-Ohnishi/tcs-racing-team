import { ScheduleItem } from '@/features/Top/Schedule/Schedule';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  limit: number;
}

export const useGetSchedule = ({ limit }: Props) => {
  const [raceSchedule, setRaceSchedule] = useState<ScheduleItem[]>([]);
  const [eventSchedule, setEventSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9y1fv8d4hm.microcms.io/api/v1/schedule';
      const raceCategoryFilter = encodeURIComponent(
        `category[equals]ticmjofd83m`,
      );
      const eventCategoryFilter = encodeURIComponent(
        `category[equals]d--puacxtl`,
      );
      const urlWithRaceFilter = `${apiUrl}?filters=${raceCategoryFilter}&limit=${limit}&orders=-publishedAt`;
      const urlWithEventFilter = `${apiUrl}?filters=${eventCategoryFilter}&limit=${limit}&orders=-publishedAt`;

      try {
        const responseRaceFilter = await axios.get(urlWithRaceFilter, {
          headers: {
            'X-API-KEY': '6TEV2O1HTegnPlQz0Pr9Xqpth9eKxx2ceMrT',
          },
        });
        setRaceSchedule(responseRaceFilter.data.contents);

        const responseEventFilter = await axios.get(urlWithEventFilter, {
          headers: {
            'X-API-KEY': '6TEV2O1HTegnPlQz0Pr9Xqpth9eKxx2ceMrT',
          },
        });
        setEventSchedule(responseEventFilter.data.contents);
      } catch (error) {
        console.error('スケジュールの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, []);

  return {
    raceScheduleList: raceSchedule,
    eventScheduleList: eventSchedule,
  };
};
