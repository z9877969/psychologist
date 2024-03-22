import ContentList from 'modules/OpenBlog/components/ContentList/ContentList';
import articles from '../modules/OpenBlog/data/articles.json';

import { Container } from 'shared/components';
import { BackToArticlesBtn } from 'modules/OpenBlog/components/BackToArticlesBtn/BackToArticlesBtn';

const BlogPage = () => {
  return (
    <Container>
      <BackToArticlesBtn />
      <div>
        <ContentList articles={articles} />
      </div>
    </Container>
  );
};

export default BlogPage;
