import { Container } from 'shared/components';
import s from './BlogListMain.module.scss';
import BlogListHeader from '../../../../shared/components/BlogListHeader/BlogListHeader';
import BlogListFilters from '../BlogListFilters/BlogListFilters';
import BlogList from '../BlogList/BlogList';
import BlogListPagination from '../BlogListPagination/BlogListPagination';
import BlogItem from 'modules/blogSection/components/BlogItems/BlogItem';
import { useEffect, useState } from 'react';
import { blogAPI } from 'shared/helpers/blogAPI';
import Section from 'shared/components/Section/Section';

const BlogListMain = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getArticles() {
      try {
        const result = await blogAPI.fetchArticles({
          page,
          category,
          query,
          limit: 6,
        });
        setArticles(result.data);
        setTotalPages(result.totalPages);
      } catch (err) {
        alert(err);
      }
    }

    getArticles();
  }, [page, category, query]);

  return (
    <Section className={s.section}>
      <Container>
        <BlogListHeader />
        <BlogListFilters
          category={category}
          onSelect={setCategory}
          onSearch={setQuery}
        />

        {articles.length && (
          <BlogList>
            {articles.map((art) => (
              <BlogItem key={art.id} blog={art} />
            ))}
          </BlogList>
        )}

        {totalPages > 1 && (
          <BlogListPagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
          />
        )}
      </Container>
    </Section>
  );
};

export default BlogListMain;
