import { NavLink } from 'react-router-dom';
import s from './LastArticlesCard.module.scss';

export const LastArticleCard = ({
  key,
  image,
  date,
  author,
  title,
  content,
}) => {
  return (
    <div className={s.wrapCard}>
      <div className={s.wrapImage}>
        <img src={image} alt="Image" width={336} />
      </div>
      <div className={s.wrapInfo}>
        <p className={s.info}>{date}</p>
        <p className={s.info}>{author}</p>
      </div>
      <div className={s.wrapArticle}>
        <p className={s.titleArticle}>{title}</p>
        <p className={s.content}>{content}</p>
      </div>
      <NavLink to={`/blog/${key}`}>Читати більше</NavLink>
      {/* <button type="button" className={s.btnCard}></button> */}
    </div>
  );
};
