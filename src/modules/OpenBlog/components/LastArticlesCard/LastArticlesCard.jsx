import { Link, useLocation } from 'react-router-dom';
import s from './LastArticlesCard.module.scss';
import Picture from 'shared/components/Picture/Picture';

export const LastArticleCard = ({ blog }) => {
  const location = useLocation();

  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  return (
    <div className={s.wrapper}>
      <div className={s.pictureWrapper}>
        <Picture
          urlDesktop={blog.urlDesktop}
          urlDesktop2x={blog.urlDesktop2x}
          urlTablet={blog.urlTablet}
          urlTablet2x={blog.urlTablet2x}
          urlMobile={blog.urlTablet2x}
          urlMobile2x={blog.urlMobile2x}
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
      <p className={s.blogText}>{blog.text}</p>
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
