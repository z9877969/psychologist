import { MainPage } from './pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'shared/components';
import BlogListPage from 'pages/BlogListPage';
import BlogPage from 'pages/BlogPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:blogId" element={<BlogPage />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
