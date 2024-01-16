import { FC } from 'react';
import { Header } from './Header';
import { Footer } from './Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
