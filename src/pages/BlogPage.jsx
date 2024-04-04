import articles from '../modules/blogPage/data/articles.json';

import ContentList from 'modules/blogPage/components/ContentList/ContentList';

import { NavLink, useNavigate } from 'react-router-dom';
import { sprite } from 'shared/icons';

import { BlogLastArticles } from 'modules/blogPage';
import { useEffect } from 'react';
import { scrollOnOpenPage } from 'shared/helpers/scroll';
import WrapDesctopBlogPage from 'shared/WrapDesctopBlogPage/WrapDesctopBlogPage';

const BlogPage = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1); // Перехід на попередню сторінку в історії
  }

  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  return (
    <>
      <WrapDesctopBlogPage>
        <div>
          <NavLink
            to="#"
            onClick={goBack}
            style={{ display: 'flex', alignItems: 'center', color: 'black' }}
          >
            <svg width="24" height="24" style={{ marginRight: '5px' }}>
              <use xlinkHref={`${sprite}#icon-paginator-chevron-left`}></use>
            </svg>
            Повернутися назад
          </NavLink>
        </div>
        <div>
          <ContentList articles={articles} />
        </div>
      </WrapDesctopBlogPage>

      <BlogLastArticles />
    </>
  );
};

export default BlogPage;
