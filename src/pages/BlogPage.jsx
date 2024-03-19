import { FirstParagraph } from 'modules/_template/components/OpenedBlog/FirstParagraph/FirstParagraph';
import { Image } from 'modules/_template/components/OpenedBlog/Image/Image';
import { ParagraphAboutMe } from 'modules/_template/components/OpenedBlog/ParagraphAboutMe/ParagraphAboutMe';
import { Quote } from 'modules/_template/components/OpenedBlog/Quote/Quote';
import { SecondParagraph } from 'modules/_template/components/OpenedBlog/SecondParagraph/SecondParagraph';
// import { useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom/dist';

// const location = useLocation();
// const backLinkRef = useRef(location).state;
import articles from '../modules/_template/articles.json';
import { Title } from 'modules/_template/components/OpenedBlog/Title/Title';
const BlogPage = () => {
  return (
    <div>
      {/* <Link to={backLinkRef.current ?? '/blog'}>
        Повернутися до всіх статтей
      </Link> */}
      <Title />
      <FirstParagraph />
      <Image />
      <SecondParagraph />
      <Quote />
      <ParagraphAboutMe />
    </div>
  );
};

export default BlogPage;
