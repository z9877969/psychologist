import BlogItem from '../BlogItem/BlogItem';
import clsx from 'clsx';
import s from './BlogList.module.scss';

const BlogList = ({ className = '', articles = [] }) => {
  return (
    <ul className={clsx(s.list, className)}>
      {articles.map((art) => (
        <BlogItem key={art.id} blog={art} />
      ))}
    </ul>
  );
};

export default BlogList;
