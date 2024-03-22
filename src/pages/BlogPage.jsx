// const location = useLocation();
// const backLinkRef = useRef(location).state;

import ContentList from 'modules/OpenBlog/components/ContentList/ContentList';
import articles from '../modules/OpenBlog/data/articles.json';

// import LastArticlesList from 'modules/OpenBlog/components/LastArticlesList/LastArticlesList';
import { Container } from 'shared/components';
import { NavLink } from 'react-router-dom';
import { sprite } from 'shared/icons';
// import { Link } from 'react-router-dom';
import s from './BlogPage.module.scss';

const BlogPage = () => {
  return (
    <Container>
      <>
        <div className={s.wrapLink}>
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
      </>
    </Container>
  );
};

export default BlogPage;
