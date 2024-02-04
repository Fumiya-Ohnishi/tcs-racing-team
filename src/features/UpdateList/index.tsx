import { Title } from '@/components/Elements/Title';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';
import { Box } from '@chakra-ui/react';
import { UpdateListPageNation } from './UpdateListPageNation/UpdateListPagenation';

export const UpdateListContent = () => {
  return (
    <PageLayout>
      <Box pt="128px" mb="128px">
        <Title title="Updates" subTitle="Updates" />
      </Box>
        <UpdateListPageNation />
        <Title title="Our Partners" subTitle="Our Partners" />
        <OurPartners />
        <OfficialMedia />
    </PageLayout>
  );
};
