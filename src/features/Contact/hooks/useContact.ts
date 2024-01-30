import axios from 'axios';
import { useEffect, useState } from 'react';

interface NewsItem {
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  updatedAt: string;
  eyecatch: {
    url: string;
  };
}

export const useUpDateContents = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9xm8l8ptud.microcms.io/api/v1/blogs';
      const categoryFilter = encodeURIComponent(`category[equals]cf2q-t46yvuv`);
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}&limit=5&orders=-publishedAt`;

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
  }, []);

  return {
    news,
  };
};
