import BlogItem from '../BlogItem/BlogItem';
import clsx from 'clsx';
import s from './BlogList.module.scss';

const BlogList = ({ className = '', articles = [] }) => {
  return (
    <ul className={clsx(s.list, className)}>
      {articles.map((item) => (
        <BlogItem key={item._id} blog={item} />
      ))}
    </ul>
  );
};

export default BlogList;
