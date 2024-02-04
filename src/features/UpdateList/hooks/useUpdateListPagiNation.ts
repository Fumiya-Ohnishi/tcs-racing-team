import { NewsItem } from '@/features/Top/UpDates/UpDateContents';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUpdateListPagiNation = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9y1fv8d4hm.microcms.io/api/v1/blogs';
      const categoryFilter = encodeURIComponent(`category[equals]akksc0wgpp`);
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}&orders=-publishedAt`;

      try {
        const response = await axios.get(urlWithFilter, {
          headers: {
            'X-API-KEY': '6TEV2O1HTegnPlQz0Pr9Xqpth9eKxx2ceMrT',
          },
        });
        setNews(response.data.contents);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, []);

  return {
    news,
  };
};
