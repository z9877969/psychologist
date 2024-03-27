import { BlogListMain } from 'modules/blogListSection';
import { BlogConsultation } from 'modules/blogConsultation';
import { useEffect } from 'react';
import { scrollOnOpenPage } from 'shared/helpers/scroll';

const BlogListPage = () => {
  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  return (
    <>
      <BlogListMain />
      <BlogConsultation />
    </>
  );
};

export default BlogListPage;
