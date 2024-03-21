// import { FirstParagraph } from 'modules/_template/components/OpenedBlog/FirstParagraph/FirstParagraph';
// import { Image } from 'modules/_template/components/OpenedBlog/Image/Image';
// import { ParagraphAboutMe } from 'modules/_template/components/OpenedBlog/ParagraphAboutMe/ParagraphAboutMe';
// import { Quote } from 'modules/_template/components/OpenedBlog/Quote/Quote';
// import { SecondParagraph } from 'modules/_template/components/OpenedBlog/SecondParagraph/SecondParagraph';
// import { useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom/dist';

// const location = useLocation();
// const backLinkRef = useRef(location).state;

import ContentList from 'modules/_template/components/OpenedBlog/ContentList/ContentList';
import articles from '../modules/_template/data/articles.json';
import lastArticles from '../modules/_template/data/lastArticles.json';
import LastArticlesList from 'modules/_template/components/OpenedBlog/LastArticlesList/LastArticlesList';
import { Container } from 'shared/components';
// import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <Container>
      <>
        <div>
          <ContentList articles={articles} />
        </div>
        <div>
          <LastArticlesList lastArticles={lastArticles} />
        </div>
      </>
    </Container>
  );
};

export default BlogPage;
