import { useEffect, useState } from 'react';
import { Container, Section, BlogListHeader } from 'shared/components';
import { blogAPI } from 'shared/helpers/blogAPI';
import {
  BlogListFilters,
  BlogList,
  BlogListPagination,
} from 'modules/blogListSection';
import { BlogItem } from 'modules/blogSection';
import * as images from '../../../blogSection/img';
import s from './BlogListMain.module.scss';
import { useMediaQuery } from 'hooks/index';

import '../BlogListFilters/theme-select.scss';

const PAGINATION_LIMITS = {
  isDesktop: 9,
  isTablet: 6,
  isMobile: 3,
};

const BlogListMain = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const media = useMediaQuery();
  const [currentMedia, setCurrentMedia] = useState(
    media.isDesktop ? 'isDesktop' : media.isTablet ? 'isTablet' : 'isMobile'
  );

  useEffect(() => {
    if (media[currentMedia]) return;

    setCurrentMedia(
      media.isDesktop ? 'isDesktop' : media.isTablet ? 'isTablet' : 'isMobile'
    );

    setPage(1);
  }, [media, currentMedia]);

  useEffect(() => {
    async function getArticles() {
      try {
        const result = await blogAPI.fetchArticles({
          page,
          category,
          query,
          limit: PAGINATION_LIMITS[currentMedia],
        });
        setArticles(result.data);
        setTotalPages(result.totalPages);
      } catch (err) {
        alert(err);
      }
    }

    getArticles();
  }, [page, category, query, currentMedia]);

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader />
        <BlogListFilters
          onSelect={setCategory}
          onSearch={setQuery}
          onChange={setPage}
        />

        {articles.length > 0 && (
          <BlogList>
            {articles.map((art) => (
              <BlogItem key={art.id} blog={art} images={images} />
            ))}
          </BlogList>
        )}

        <BlogListPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
          media={media}
        />
      </Container>
    </Section>
  );
};

export default BlogListMain;
