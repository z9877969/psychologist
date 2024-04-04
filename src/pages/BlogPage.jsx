import { useEffect, useState } from 'react';
import articlesData from '../modules/blogPage/data/articlesData.json'; // Шлях до файлу з даними статей
import ContentList from '../modules/blogPage/components/ContentList/ContentList'; // Компонент для відображення вмісту статті
import { BlogLastArticles } from 'modules/blogPage';
import WrapDesctopBlogPage from 'shared/WrapDesctopBlogPage/WrapDesctopBlogPage';

import { NavLink, useNavigate } from 'react-router-dom';
import { sprite } from 'shared/icons';

const BlogPage = () => {
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    // Знаходження статті за її ідентифікатором
    setArticle(articlesData[0]);
  }, []);

  if (!article) {
    return <div>Стаття не знайдена</div>;
  }

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
        <div>
          <ContentList article={article} />
        </div>
      </WrapDesctopBlogPage>

      <BlogLastArticles />
    </>
  );
};

export default BlogPage;
