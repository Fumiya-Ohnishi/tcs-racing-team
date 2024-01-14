import { MainLayout } from '@/components/Layouts/MainLayout';
import { Box } from '@chakra-ui/react';
import { FirstContent } from './FirstContent';
import { SecondContent } from './SecondContent';
import { LinkButton } from '@/components/Elements/LinkButton';
import { OtherContents } from './OtherContents';

export const UpdatesContent = () => {
  return (
    <MainLayout>
      <Box pb="96px">
        <Box display="flex" justifyContent="space-between" mb="79px">
          <Box w="calc(50% - 16px)">
            <FirstContent />
            <SecondContent />
          </Box>
          <Box w="calc(50% - 16px)">
            <OtherContents />
          </Box>
        </Box>

        <LinkButton link="#" text="More Updates" />
      </Box>
    </MainLayout>
  );
};
