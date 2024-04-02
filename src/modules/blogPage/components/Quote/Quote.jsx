import { sprite } from 'shared/icons';
import s from './Quote.module.scss';

export const Quote = ({ content, accent, author }) => {
  return (
    <section className={s.wraperQuote}>
      <div className={s.quote}>
        <svg width={42} height={42}>
          <use href={`${sprite}#icon-element-text-right`}></use>
        </svg>
        <div className={s.wrapContent}>
          <p className={s.content}>
            <span className={s.accent}>{accent}</span>
            {content}
          </p>
        </div>
        <div className={s.wrapEl}>
          <svg width={42} height={42}>
            <use href={`${sprite}#icon-element-text-left`}></use>
          </svg>
        </div>
      </div>
      <div className={s.wrapAuthor}>
        <p className={s.author}>{author}</p>
      </div>
    </section>
  );
};
