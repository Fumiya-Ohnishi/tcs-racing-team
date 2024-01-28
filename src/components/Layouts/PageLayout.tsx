import { FC } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

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
