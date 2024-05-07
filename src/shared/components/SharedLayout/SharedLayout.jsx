import { Footer } from 'modules/footer';
// import { Header } from 'modules/header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpButton } from '..';
import HeaderSection from 'modules/header.3/components/HeaderSection/HeaderSection';
import Toastify from '../Toastify/Toastify';

const SharedLayout = () => {
  return (
    <>
      <HeaderSection />
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
