import axios from 'axios';
import { useEffect, useState } from 'react';
import { NewsItem } from '../UpDateContents';

interface CategorizedArrays {
  first: NewsItem[];
  second: NewsItem[];
  third: NewsItem[];
}

export const useUpDateContents = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9xm8l8ptud.microcms.io/api/v1/blogs';
      const categoryFilter = encodeURIComponent(`category[equals]cf2q-t46yvuv`);
      const limit = 10;
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}&limit=${limit}`;

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

  // 0番目は大きく表示、1,2番目は小さく表示、3~6番目はテキストのみ表示、それぞれを配列に格納
  const categorizedArrays = news.reduce<CategorizedArrays>(
    (acc, item, index) => {
      if (index === 0) {
        acc.first.push(item);
        return acc;
      }
      if (index === 1 || index === 2) {
        acc.second.push(item);
        return acc;
      }
      if (index >= 3 && index <= 7) {
        acc.third.push(item);
        return acc;
      }
      return acc;
    },
    { first: [], second: [], third: [] },
  );

  return {
    updateFirstArray: categorizedArrays.first,
    updateSecondArray: categorizedArrays.second,
    updateThirdArray: categorizedArrays.third,
  };
};
