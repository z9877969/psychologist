import { Container } from 'shared/components';
import s from './BlogSection.module.scss';
import blogData from '../../data/blogData.json';
import BlogItem from '../BlogItems/BlogItem';
import Button from 'shared/components/Button/Button';

const BlogSection = () => {
  const data = blogData.slice(0, 3);

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Блог</h2>
        <p className={s.description}>
          Розмірковую над темами, які мене зацікавили. Запрошую читачів разом зі
          мною досліджувати ключові поняття психології
        </p>
        <ul className={s.list}>
          {data.map((blog) => {
            return (
              <li key={blog.id} className={s.item}>
                <BlogItem blog={blog} />
              </li>
            );
          })}
        </ul>
        <Button to="/blog">Переглянути більше статтей</Button>
      </Container>
    </section>
  );
};
export default BlogSection;
