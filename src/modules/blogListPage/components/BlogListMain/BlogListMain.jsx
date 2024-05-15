import { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Section,
  BlogListHeader,
  BlogList,
} from 'shared/components';
import {
  BlogListFilters,
  BlogListPagination,
  NoArticlesFound,
} from 'modules/blogListPage';
import s from './BlogListMain.module.scss';
import { useMedia } from 'hooks';

import '../BlogListFilters/theme-select.scss';
import { useSearchParams } from 'react-router-dom';
import { scrollOnOpenPage } from 'shared/helpers/scroll';
import { ThreeDots } from 'react-loader-spinner';
import { filterBlogs } from 'shared/helpers';
import { useBlogs } from 'hooks/useBlogs';

const PAGINATION_LIMITS = {
  isDesktop: 9,
  isTablet: 6,
  isMobile: 3,
};

const LOADER_SIZE = {
  isDesktop: 100,
  isTablet: 80,
  isMobile: 60,
};

const BlogListMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const media = useMedia();
  const [currentMedia, setCurrentMedia] = useState(
    media.isDesktop ? 'isDesktop' : media.isTablet ? 'isTablet' : 'isMobile'
  );

  const { blogs, categories, isLoading } = useBlogs();

  const { data: articles, totalPages } = useMemo(() => {
    return filterBlogs({
      articles: blogs,
      page,
      category,
      query,
      limit: PAGINATION_LIMITS[currentMedia],
    });
  }, [page, category, query, currentMedia, blogs]);

  useEffect(() => {
    if (media[currentMedia]) return;
    setCurrentMedia(
      media.isDesktop ? 'isDesktop' : media.isTablet ? 'isTablet' : 'isMobile'
    );
    setPage(1);
  }, [media, currentMedia]);

  useEffect(() => {
    scrollOnOpenPage('smooth');
  }, [page]);

  function handleChangeFilters(selectValue = '', search = '') {
    setCategory(selectValue);
    setQuery(search);
    setPage(1);

    const newSearchParams = {};
    if (selectValue) newSearchParams.category = selectValue;
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
        <BlogListFilters
          categories={categories}
          onChange={handleChangeFilters}
          isLoading={isLoading}
        />
        <div className={s.loadingBlock}>
          <BlogList articles={articles} />
          <BlogListPagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
            media={media}
            isLoading={isLoading}
          />
          {isLoading && (
            <ThreeDots
              color="#1E5B2A"
              width={LOADER_SIZE[currentMedia]}
              wrapperClass={s.loaderWrapper}
              ariaLabel="three-dots-loading"
            />
          )}
          {!isLoading && articles.length === 0 && <NoArticlesFound />}
        </div>
      </Container>
    </Section>
  );
};

export default BlogListMain;
