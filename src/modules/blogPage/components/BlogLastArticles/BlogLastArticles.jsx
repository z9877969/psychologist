import {
  BlogListHeader,
  Container,
  Section,
  Button,
  BlogList,
} from 'shared/components';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'hooks/index';
import { blogAPI } from 'shared/helpers/blogAPI';

import s from './BlogLastArticles.module.scss';

const BlogLastArticles = () => {
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
