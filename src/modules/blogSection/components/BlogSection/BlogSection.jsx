import {
  Button,
  BlogList,
  Container,
  Section,
  BlogListHeader,
} from 'shared/components';
import { useEffect, useState } from 'react';
import { blogAPI } from 'shared/helpers/blogAPI';
import { useMediaQuery } from 'hooks/index';

import s from './BlogSection.module.scss';
import BackgroundImage from 'shared/components/BackgroundImeg/BackgroundImage';

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const media = useMediaQuery();

  useEffect(() => {
    async function getLastArticles() {
      try {
        const result = await blogAPI.fetchLatestArticles(3);
        setArticles(result);
      } catch (err) {
        alert(err);
      }
    }

    getLastArticles();
  }, []);

  const visibleArticles = media.isDesktop
    ? articles
    : media.isTablet
      ? articles.slice(0, 2)
      : articles.slice(0, 1);

  const header = 'Блог';
  const text =
    'Розмірковую над темами, які мене зацікавили. Запрошую читачів разом зі мною досліджувати ключові поняття психології';

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader header={header} text={text} />
        <BlogList articles={visibleArticles} />
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
