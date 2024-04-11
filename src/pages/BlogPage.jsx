import { useEffect, useState } from 'react';
import articlesData from '../modules/blogPage/data/articlesData.json'; // Шлях до файлу з даними статей
import ContentList from '../modules/blogPage/components/ContentList/ContentList'; // Компонент для відображення вмісту статті
import { BlogLastArticles } from 'modules/blogPage';
import WrapDesctopBlogPage from 'shared/WrapDesctopBlogPage/WrapDesctopBlogPage';

import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { sprite } from 'shared/icons';
import { scrollOnOpenPage } from 'shared/helpers/scroll';

const BlogPage = () => {
  const [article, setArticle] = useState(null);
  const param = useParams();

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  useEffect(() => {
    const selectedArticle = articlesData.find((article) =>
      article.id.includes(param.blogId)
    );

    if (selectedArticle) {
      setArticle(selectedArticle);
    }
  }, [param]);

  return (
    <>
      <WrapDesctopBlogPage>
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
        <div>{article && <ContentList article={article} />}</div>
      </WrapDesctopBlogPage>

      <BlogLastArticles />
    </>
  );
};

export default BlogPage;
