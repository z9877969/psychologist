import s from './Quote.module.scss';
import { sprite } from 'shared/icons';
import { pasteAccentPhrase } from 'shared/helpers';

export const Quote = ({ accent = '', author = '', text = '' }) => {
  const withAccentText = pasteAccentPhrase(text, accent).map(
    ({ value, type }, i) =>
      type === 'accent' ? (
        <span key={i} className={s.accent}>
          {value}
        </span>
      ) : (
        value
      )
  );
  return (
    <div className={s.wraperQuote}>
      <div className={s.quote}>
        <div className={s.wrapElLeft}>
          <svg width={42} height={42}>
            <use href={`${sprite}#icon-element-text-right`}></use>
          </svg>
        </div>

        <p className={s.content}>{withAccentText}</p>

        <div className={s.wrapElRight}>
          <svg width={42} height={42}>
            <use href={`${sprite}#icon-element-text-left`}></use>
          </svg>
        </div>
      </div>

      <p className={s.author}>{author}</p>
    </div>
  );
};
