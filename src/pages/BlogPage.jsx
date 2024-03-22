import articles from '../modules/blogPage/data/articles.json';
import { BackToArticlesBtn } from 'modules/blogPage/components/BackToArticlesBtn/BackToArticlesBtn';
import ContentList from 'modules/blogPage/components/ContentList/ContentList';
import { Container } from 'shared/components';

const BlogPage = () => {
  return (
    <Container>
      <div>
        <BackToArticlesBtn />
        <ContentList articles={articles} />
      </div>
    </Container>
  );
};

export default BlogPage;
