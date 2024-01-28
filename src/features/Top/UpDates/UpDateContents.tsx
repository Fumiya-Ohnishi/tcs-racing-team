import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box } from '@chakra-ui/react';
import { FirstContent } from './FirstContent';
import { SecondContent } from './SecondContent';
import { LinkButton } from '@/components/Elements/LinkButton';
import { OtherContents } from './OtherContents';
import { useUpDateContents } from './hooks/useUpDateContents';

// MicroCMSから返されるニュースアイテムの型を定義
export interface NewsItem {
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

export const UpdatesContent = () => {
  const { updateFirstArray, updateSecondArray, updateThirdArray } =
    useUpDateContents();

  return (
    <MainLayout>
      <Box pb="96px">
        <Box
          display={{ base: 'block', lg: 'flex' }}
          justifyContent="space-between"
          mb="79px"
        >
          <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
            <FirstContent updateArray={updateFirstArray} />
            <SecondContent updateArray={updateSecondArray} />
          </Box>
          <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
            <OtherContents updateArray={updateThirdArray} />
          </Box>
        </Box>

        <LinkButton link="#" text="More Updates" />
      </Box>
    </MainLayout>
  );
};
