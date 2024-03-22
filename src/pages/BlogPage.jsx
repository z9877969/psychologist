// const location = useLocation();
// const backLinkRef = useRef(location).state;

import ContentList from 'modules/OpenBlog/components/ContentList/ContentList';
import articles from '../modules/OpenBlog/data/articles.json';

// import LastArticlesList from 'modules/OpenBlog/components/LastArticlesList/LastArticlesList';
import { Container } from 'shared/components';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <Container>
      <>
        <NavLink style={{ marginBottom: '40px' }} to="/blog">
          Повернутися до всіх статтей
        </NavLink>
        <div>
          <ContentList articles={articles} />
        </div>
        {/* <div>
          <LastArticlesList />
        </div> */}
      </>
    </Container>
  );
};

export default BlogPage;
