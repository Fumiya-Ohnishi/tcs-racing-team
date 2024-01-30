import { NewsItem } from '@/features/Top/UpDates/UpDateContents';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUpDateContents = (id: string) => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9xm8l8ptud.microcms.io/api/v1/blogs';
      const categoryFilter = encodeURIComponent(`category[equals]cf2q-t46yvuv`);
      const excludeIdFilter = encodeURIComponent(`id[not_equals]${id}`);
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}[and]${excludeIdFilter}&limit=3&orders=-publishedAt`;
      try {
        const response = await axios.get(urlWithFilter, {
          headers: {
            'X-API-KEY': 'vHrEF1zTpmkjH8TV76k9GJcKMyieNLNxVsX0',
          },
        });
        setNews(response.data.contents);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, [id]);

  return {
    news,
  };
};
