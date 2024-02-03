import { Title } from '@/components/Elements/Title';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { OurPartners } from '../Top/OurPartners';
import { OfficialMedia } from '../Top/OfficialMedia';

export const UpdateListContent = () => {
  return (
    <PageLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
