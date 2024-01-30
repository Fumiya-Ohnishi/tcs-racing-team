import { ScheduleItem } from '@/features/Top/Schedule/Schedule';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useSchedule = () => {
  const [raceSchedule, setRaceSchedule] = useState<ScheduleItem[]>([]);
  const [eventSchedule, setEventSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9xm8l8ptud.microcms.io/api/v1/blogs';
      const raceCategoryFilter = encodeURIComponent(
        `category[equals]wirz3e8ue_y`,
      );
      const eventCategoryFilter = encodeURIComponent(
        `category[equals]kf-0ocxoj15g`,
      );
      const urlWithRaceFilter = `${apiUrl}?filters=${raceCategoryFilter}&limit=12&orders=-publishedAt`;
      const urlWithEventFilter = `${apiUrl}?filters=${eventCategoryFilter}&limit=12&orders=-publishedAt`;

      try {
        const responseRaceFilter = await axios.get(urlWithRaceFilter, {
          headers: {
            'X-API-KEY': 'vHrEF1zTpmkjH8TV76k9GJcKMyieNLNxVsX0',
          },
        });
        setRaceSchedule(responseRaceFilter.data.contents);

        const responseEventFilter = await axios.get(urlWithEventFilter, {
          headers: {
            'X-API-KEY': 'vHrEF1zTpmkjH8TV76k9GJcKMyieNLNxVsX0',
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
