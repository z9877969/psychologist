import { useEffect, useState } from 'react';
import {
  Container,
  Section,
  BlogListHeader,
  BlogList,
} from 'shared/components';
import { blogAPI } from 'shared/helpers/blogAPI';
import { BlogListFilters, BlogListPagination } from 'modules/blogListSection';
import s from './BlogListMain.module.scss';
import { useMediaQuery } from 'hooks/index';

import '../BlogListFilters/theme-select.scss';
import { useSearchParams } from 'react-router-dom';
import { scrollOnOpenPage } from 'shared/helpers/scroll';

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

  useEffect(() => {
    scrollOnOpenPage('smooth');
  }, [page]);

  function handleChangeFilters(select = '', search = '') {
    setCategory(select);
    setQuery(search);
    setPage(1);

    const newSearchParams = {};
    if (select !== '') newSearchParams.category = select;
    if (search !== '') newSearchParams.query = search;

    setSearchParams(newSearchParams);
  }

  const header = 'Блог';
  const text =
    'Розмірковую над темами, які мене зацікавили. Запрошую читачів разом зі мною досліджувати ключові поняття психології';

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader header={header} text={text} />
        <BlogListFilters onChange={handleChangeFilters} />
        <BlogList articles={articles} />

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
