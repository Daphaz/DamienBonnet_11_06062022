import { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: ReactNode;
  hideFooter?: boolean;
};

export const Layout = ({ children, hideFooter = false }: Props) => {
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};
