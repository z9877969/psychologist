import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpButton } from '..';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default SharedLayout;
