import {
  Button,
  BlogList,
  Container,
  Section,
  BlogListHeader,
} from 'shared/components';
import { useMedia } from 'hooks';
import { useBlogs } from 'hooks/useBlogs';
import BackgroundImage from 'shared/components/BackgroundImeg/BackgroundImage';
import s from './BlogSection.module.scss';
import { useMemo } from 'react';
import { shuffleArray } from 'shared/helpers';

const BlogSection = () => {
  const { blogs = [] } = useBlogs();
  const media = useMedia();

  const visibleArticles = useMemo(() => {
    if (blogs.length === 0) return [];
    const blogsShuffle = shuffleArray(blogs);
    return media.isDesktop
      ? blogsShuffle.slice(0, 3)
      : media.isTablet
        ? blogsShuffle.slice(0, 2)
        : blogsShuffle.slice(0, 1);
  }, [blogs, media]);

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
