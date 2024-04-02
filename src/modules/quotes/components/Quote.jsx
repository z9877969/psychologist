import { Container } from 'shared/components';
import s from './Quote.module.scss';
import { sprite } from 'shared/icons';

// ({ data: { content, accent, author } });

export const Quote = ({ data }) => {
  return (
    <Container>
      <section className={s.wraperQuote}>
        <ul>
          {data.map((quote) => (
            <li key={quote.id}>
              <div className={s.quote}>
                <div className={s.wrapElLeft}>
                  <svg width={42} height={42}>
                    <use href={`${sprite}#icon-element-text-right`}></use>
                  </svg>
                </div>
                <div className={s.wrapContent}>
                  <p className={s.content}>
                    <span className={s.accent}>{quote.accent}</span>
                    {quote.content}
                  </p>
                </div>
                <div className={s.wrapElRight}>
                  <svg width={42} height={42}>
                    <use href={`${sprite}#icon-element-text-left`}></use>
                  </svg>
                </div>
              </div>
              <div className={s.wrapAuthor}>
                <p className={s.author}>{quote.author}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
