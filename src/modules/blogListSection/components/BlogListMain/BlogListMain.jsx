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
import { useSearchParams } from 'react-router-dom';

const PAGINATION_LIMITS = {
  isDesktop: 9,
  isTablet: 6,
  isMobile: 3,
};

const BlogListMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [query, setQuery] = useState(searchParams.get('query') || '');
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

  function handleChangeFilters(select = '', search = '') {
    setCategory(select);
    setQuery(search);
    setPage(1);

    const newSearchParams = {};
    if (select !== '') newSearchParams.category = select;
    if (search !== '') newSearchParams.query = search;

    setSearchParams(newSearchParams);
  }

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader />
        <BlogListFilters onChange={handleChangeFilters} />

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
