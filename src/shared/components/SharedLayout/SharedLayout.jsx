import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpButton } from '..';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default SharedLayout;
