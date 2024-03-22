import BlogItem from 'modules/blogSection/components/BlogItems/BlogItem';
import s from './BlogList.module.scss';
import clsx from 'clsx';

const BlogList = ({ data, images, className, classItem }) => {
  return (
    <ul className={clsx(s.list, className)}>
      {data.map((blog) => {
        return (
          <li key={blog.id} className={classItem}>
            <BlogItem blog={blog} images={images} />
          </li>
        );
      })}
    </ul>
  );
};
export default BlogList;
