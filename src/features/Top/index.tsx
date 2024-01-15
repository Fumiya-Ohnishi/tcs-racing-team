import { Header } from '@/components/Layouts/Header';
import { Carousel } from './Slider/Carousel';
import { Title } from '@/components/Elements/Title';
import { UpdatesContent } from './UpDates/UpDateContents';
import { Staff } from './Staff/Staff';

export const TopContent = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Title title="Updates" subTitle="Updates" />
      <UpdatesContent />
      <Title title="TheStaff" subTitle="TheStaff" />
      <Staff />
    </>
  );
};
