import { Footer } from 'modules/footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpButton } from '..';
import { Header } from 'modules/header';
import Toastify from '../Toastify/Toastify';

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
      <Toastify />
    </>
  );
};

export default SharedLayout;
