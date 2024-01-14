import { Header } from '@/components/Layouts/Header';
import { Carousel } from './Slider/Carousel';
import { Title } from '@/components/Elements/Title';
import { UpdatesContent } from './UpDates/UpDateContents';

export const TopContent = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Title title="Updates" subTitle="Updates" />
      <UpdatesContent />
    </>
  );
};
