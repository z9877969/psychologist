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

// import BlogItem from 'modules/blogSection/components/BlogItems/BlogItem';
// import s from './BlogList.module.scss';
// import clsx from 'clsx';

// const BlogList = ({ data, images, className, classItem }) => {
//   return (
//     <ul className={clsx(s.list, className)}>
//       {data.map((blog) => {
//         return (
//           <li key={blog.id} className={classItem}>
//             <BlogItem blog={blog} images={images} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// export default BlogList;
