import {
  Button,
  BlogList,
  Container,
  Section,
  BlogListHeader,
} from 'shared/components';
import { useMediaQuery } from 'hooks';
import { useBlogs } from 'hooks/useBlogs';
import BackgroundImage from 'shared/components/BackgroundImeg/BackgroundImage';
import s from './BlogSection.module.scss';

const BlogSection = () => {
  const { blogs = [] } = useBlogs();
  const media = useMediaQuery();

  const visibleArticles =
    blogs.length === 0
      ? []
      : media.isDesktop
        ? blogs.slice(0, 3)
        : media.isTablet
          ? blogs.slice(0, 2)
          : blogs.slice(0, 1);

  const header = 'Блог';
  const text =
    'Розмірковую над темами, які мене зацікавили. Запрошую читачів разом зі мною досліджувати ключові поняття психології';

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader header={header} text={text} />
        {visibleArticles.length > 0 && <BlogList articles={visibleArticles} />}
        <Button to="/blog">Переглянути більше статтей</Button>
      </Container>
      <BackgroundImage
        classSvg={s.svgfirst}
        classLine={s.svgLine}
        name={'icon-vector-blog'}
        nameLine={'icon-vector-blog-line'}
      />
    </Section>
  );
};

export default BlogSection;
