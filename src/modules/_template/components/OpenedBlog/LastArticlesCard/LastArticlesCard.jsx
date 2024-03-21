import s from './LastArticlesCard.module.scss';

export const LastArticleCard = ({ image, date, author, title, content }) => {
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
      <button type="button" className={s.btnCard}>
        Читати більше
      </button>
    </div>
  );
};
