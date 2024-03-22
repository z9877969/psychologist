import s from './Quote.module.scss';

export const Quote = ({ content, accent, author }) => {
  return (
    <section className={s.wraperQuote}>
      <div className={s.quote}>
        <p className={s.textEl}>“</p>
        <div className={s.wrapContent}>
          <p className={s.content}>
            <span className={s.accent}>{accent}</span>
            {content}
          </p>
        </div>
        <div className={s.wrapEl}>
          <p className={s.textEl}>”</p>
        </div>
      </div>
      <div className={s.wrapAuthor}>
        <p className={s.author}>{author}</p>
      </div>
    </section>
  );
};
