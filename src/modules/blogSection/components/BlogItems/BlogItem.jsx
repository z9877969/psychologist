import { Link, useLocation } from 'react-router-dom';
import s from './BlogItem.module.scss';
import Picture from 'shared/components/Picture/Picture';

const BlogItem = ({ blog, images }) => {
  const location = useLocation();

  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  return (
    <div className={s.wrapper}>
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
          <p className={s.date}>{blog.date}</p>
        </li>
        <li>
          <p className={s.date}>{blog.author}</p>
        </li>
      </ul>
      <h3 className={s.title}>{blog.title}</h3>
      <p className={s.BlogText}>{blog.text}</p>
      <Link
        className={s.link}
        to={`/blog/${blog.id}`}
        state={{ from: location }}
      >
        Читати більше
      </Link>
    </div>
  );
};
export default BlogItem;
