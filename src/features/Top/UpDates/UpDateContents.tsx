import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box } from '@chakra-ui/react';
import { FirstContent } from './FirstContent';
import { SecondContent } from './SecondContent';
import { OtherContents } from './OtherContents';
import { useUpDateContents } from './hooks/useUpDateContents';
import { LinkButton } from '@/components/Elements/LinkButton';

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
          {updateFirstArray.length !== 0 && (
            <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
              <FirstContent updateArray={updateFirstArray} />
              {updateSecondArray.length !== 0 && (
                <SecondContent updateArray={updateSecondArray} />
              )}
            </Box>
          )}

          {updateThirdArray.length !== 0 && (
            <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
              <OtherContents updateArray={updateThirdArray} />
            </Box>
          )}

          {updateFirstArray.length === 0 &&
            updateSecondArray.length === 0 &&
            updateThirdArray.length === 0 && (
              <Box color="#FFF">Coming soon..</Box>
            )}
        </Box>

        <LinkButton link="/update-list" text="More Updates" />
      </Box>
    </MainLayout>
  );
};
