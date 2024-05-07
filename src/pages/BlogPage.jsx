import { useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { BlogLastArticles, ContentList } from 'modules/blogPage';
import WrapDesctopBlogPage from 'shared/WrapDesctopBlogPage/WrapDesctopBlogPage';

import { sprite } from 'shared/icons';
import { scrollOnOpenPage } from 'shared/helpers/scroll';
import { useBlogs } from 'hooks/useBlogs';

const BlogPage = () => {
  const location = useLocation();
  const { blogId } = useParams();

  const { blogs } = useBlogs();

  const article = blogs.find((el) => el._id === blogId);

  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  return (
    <>
      <WrapDesctopBlogPage>
        <NavLink
          to={location.state?.from ?? '/'}
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <svg width="24" height="24" style={{ marginRight: '5px' }}>
            <use xlinkHref={`${sprite}#icon-paginator-chevron-left`}></use>
          </svg>
          Повернутися назад
        </NavLink>
        {article && <ContentList items={article.items} />}
      </WrapDesctopBlogPage>

      <BlogLastArticles />
    </>
  );
};

export default BlogPage;
