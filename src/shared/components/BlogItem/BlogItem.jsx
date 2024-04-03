import { Link, useLocation } from 'react-router-dom';
import { Picture } from 'shared/components';
import * as images from 'shared/images/blog';
import s from './BlogItem.module.scss';

const BlogItem = ({ blog }) => {
  const location = useLocation();

  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  const year = blog.date.slice(0, 4);
  const month = blog.date.slice(5, 7);
  const date = blog.date.slice(-2);

  return (
    <Link
      className={s.wrapper}
      to={`/blog/${blog.id}`}
      state={{ from: location }}
    >
      <div className={s.content}>
        <div className={s.pictureWrapper}>
          <Picture
            urlDesktop={images[blog.urlDesktop]}
            urlDesktop2x={images[blog.urlDesktop2x]}
            urlTablet={images[blog.urlTablet]}
            urlTablet2x={images[blog.urlTablet2x]}
            urlMobile={images[blog.urlMobile]}
            urlMobile2x={images[blog.urlMobile2x]}
            alt={blog.alt}
            width={imgWidth}
            height={blog.height}
          />
        </div>

        <ul className={s.list}>
          <li>
            <p className={s.date}>{`${date}.${month}.${year}`}</p>
          </li>
          <li>
            <p className={s.date}>{blog.author}</p>
          </li>
        </ul>
        <h3 className={s.title}>{blog.title}</h3>
        <p className={s.BlogText}>{blog.text}</p>
        <p
          className={s.link}
          // to={`/blog/${blog.id}`}
          // state={{ from: location }}
        >
          Читати більше
        </p>
      </div>
    </Link>
  );
};
export default BlogItem;
