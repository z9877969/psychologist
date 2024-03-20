import BlogList from 'modules/blogListSection/components/BlogList/BlogList';
import BlogListFilters from 'modules/blogListSection/components/BlogListFilters/BlogListFilters';
import BlogListHeader from 'modules/blogListSection/components/BlogListHeader/BlogListHeader';
import BlogListMain from 'modules/blogListSection/components/BlogListMain/BlogListMain';
import BlogListPagination from 'modules/blogListSection/components/BlogListPagination/BlogListPagination';

const BlogListPage = () => {
  return (
    <>
      <h1>BlogListPage</h1>
      <BlogListMain>
        <BlogListHeader />
        <BlogListFilters />
        <BlogList />
        <BlogListPagination />
      </BlogListMain>
    </>
  );
};

export default BlogListPage;
