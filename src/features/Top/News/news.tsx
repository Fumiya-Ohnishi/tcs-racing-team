import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';

// MicroCMSから返されるニュースアイテムの型を定義
type NewsItem = {
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  updatedAt: string;
};

export const NewsContent = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = 'https://9xm8l8ptud.microcms.io/api/v1/blogs';
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-API-KEY': 'vHrEF1zTpmkjH8TV76k9GJcKMyieNLNxVsX0',
          },
        });
        setNews(response.data.contents);
        console.log('ニュースの取得に成功しました', response.data.contents);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box>
      {news.map((item, index) => (
        <Box key={index}>
          <Text fontSize="lg">{item.title}</Text>
          <Box dangerouslySetInnerHTML={{ __html: item.content }} />
        </Box>
      ))}
    </Box>
  );
};
