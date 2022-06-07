import { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: ReactNode;
  hideFooter?: boolean;
  flex?: boolean;
};

export const Layout = ({
  children,
  hideFooter = false,
  flex = false,
}: Props) => {
  return (
    <>
      <Header />
      <main className={flex ? 'container flex' : 'container'}>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};
