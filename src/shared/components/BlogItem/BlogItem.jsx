import { Link, useLocation, useParams } from 'react-router-dom';
import { Picture } from 'shared/components';
import s from './BlogItem.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';

const BlogItem = ({ blog }) => {
  const location = useLocation();
  const { blogId } = useParams();

  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  const year = blog.author.date.slice(0, 4);
  const month = blog.author.date.slice(5, 7);
  const date = blog.author.date.slice(-2);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [blogId]);

  return (
    <Link
      className={s.wrapper}
      to={`/blog/${blog._id}`}
      state={{ from: location.state?.from || '/' }}
    >
      <div className={s.content}>
        <div
          className={clsx(s.pictureWrapper, !blog.previewUrl && s.pictureBg)}
        >
          {blog.previewUrl && (
            <Picture
              defaultImage={blog.previewUrl}
              alt={blog.alt}
              width={imgWidth}
              height={blog.height}
            />
          )}
        </div>
        <div className={s.descr}>
          <ul className={s.list}>
            <li>
              <p className={s.date}>{`${date}.${month}.${year}`}</p>
            </li>
            <li>
              <p className={s.date}>{blog.author.author}</p>
            </li>
          </ul>
          <h3 className={s.title}>
            {blog.items.find((el) => el.block === 'primaryTitle').content}
          </h3>
          <p className={s.BlogText}>
            {blog.items.find((el) => el.block === 'paragraph').content}
          </p>
          <p className={s.link}>Читати більше</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogItem;
