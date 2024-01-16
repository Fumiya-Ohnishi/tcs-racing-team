import { FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

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
