import articles from '../modules/blogPage/data/articles.json';

import ContentList from 'modules/blogPage/components/ContentList/ContentList';
import { Container } from 'shared/components';
import { NavLink } from 'react-router-dom';
import { sprite } from 'shared/icons';

const BlogPage = () => {
  return (
    <Container>
      <div>
        <NavLink
          to="/blog"
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <svg width="24" height="24" style={{ marginRight: '5px' }}>
            <use xlinkHref={`${sprite}#icon-paginator-chevron-left`}></use>
          </svg>
          Повернутися до всіх статтей
        </NavLink>
      </div>
      <div>
        <ContentList articles={articles} />
      </div>
    </Container>
  );
};

export default BlogPage;
