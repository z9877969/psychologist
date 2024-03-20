import s from './Quote.module.scss';

export const Quote = ({ content, accent, author }) => {
  return (
    <div className={s.wraperQuote}>
      <div className={s.wrapContent}>
        <p className={s.textEl}>“</p>
        <p className={s.content}>
          <span className={s.accent}>{accent}</span>
          {content}
        </p>
        <p className={s.textEl}>“</p>
      </div>
      <div className={s.wrapAuthor}>
        <p className={s.author}>{author}</p>
      </div>
    </div>
  );
};
