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
      const apiUrl = 'https://9y1fv8d4hm.microcms.io/api/v1/blogs';
      const categoryFilter = encodeURIComponent(`category[equals]akksc0wgpp`);
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}&limit=8&orders=-publishedAt`;

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
