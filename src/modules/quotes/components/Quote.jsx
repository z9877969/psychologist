import { Container } from 'shared/components';
import s from './Quote.module.scss';

// ({ data: { content, accent, author } });

export const Quote = ({ data }) => {
  return (
    <Container>
      <section className={s.wraperQuote}>
        <ul>
          {data.map((quote) => (
            <li key={quote.id}>
              <div className={s.quote}>
                <div>
                  <p className={s.textEl}>“</p>
                </div>
                <div className={s.wrapContent}>
                  <p className={s.content}>
                    <span className={s.accent}>{quote.accent}</span>
                    {quote.content}
                  </p>
                </div>
                <div className={s.wrapEl}>
                  <p className={s.textEl}>”</p>
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
