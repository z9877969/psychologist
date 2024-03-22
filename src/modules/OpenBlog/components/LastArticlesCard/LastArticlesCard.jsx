import { Link, useLocation } from 'react-router-dom';
import s from './LastArticlesCard.module.scss';
import Picture from 'shared/components/Picture/Picture';

export const LastArticleCard = ({ article }) => {
  const location = useLocation();

  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  return (
    <div className={s.wrapper}>
      <div className={s.pictureWrapper}>
        <Picture
          urlDesktop={article.urlDesktop}
          urlDesktop2x={article.urlDesktop2x}
          urlTablet={article.urlTablet}
          urlTablet2x={article.urlTablet2x}
          urlMobile={article.urlTablet2x}
          urlMobile2x={article.urlMobile2x}
          alt={article.alt}
          width={imgWidth}
          height={article.height}
        />
      </div>

      <ul className={s.list}>
        <li>
          <p className={s.date}>{article.date}</p>
        </li>
        <li>
          <p className={s.date}>{article.author}</p>
        </li>
      </ul>
      <h3 className={s.title}>{article.title}</h3>
      <p className={s.blogText}>{article.text}</p>
      <Link
        className={s.link}
        to={`/blog/${article.id}`}
        state={{ from: location }}
      >
        Читати більше
      </Link>
    </div>
  );
};
