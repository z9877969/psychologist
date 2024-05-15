import {
  BlogListHeader,
  Container,
  Section,
  Button,
  BlogList,
} from 'shared/components';
import { useMemo } from 'react';
import { useMedia } from 'hooks';

import s from './BlogLastArticles.module.scss';
import { useBlogs } from 'hooks/useBlogs';
import { filterBlogs } from 'shared/helpers';

const BlogLastArticles = () => {
  const { blogs } = useBlogs();
  const media = useMedia();

  const articles = useMemo(() => {
    const { data } = filterBlogs({ articles: blogs });
    return data?.slice(0, 3);
  }, [blogs]);

  const header = 'Останні статті';
  const visibleArticles = media.isDesktop ? articles : articles.slice(0, 2);

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader header={header} />
        <BlogList articles={visibleArticles} />
        <Button to="/blog">Переглянути більше статтей</Button>
      </Container>
    </Section>
  );
};

export default BlogLastArticles;
