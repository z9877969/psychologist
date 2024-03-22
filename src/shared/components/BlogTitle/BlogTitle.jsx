import s from './BlogTitle.module.scss';

const BlogTitle = () => {
  return (
    <>
      <h2 className={s.title}>Блог</h2>
      <p className={s.description}>
        Розмірковую над темами, які мене зацікавили. Запрошую читачів разом зі
        мною досліджувати ключові поняття психології
      </p>
    </>
  );
};
export default BlogTitle;
