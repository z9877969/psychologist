import { Quote } from 'modules/quotes';
import s from './BlogQuote.module.scss';

export const BlogQuote = ({ text, accent, author }) => {
  return (
    <section>
      <div className={s.qouteWrapper}>
        <Quote accent={accent} author={author} text={text} />
      </div>
    </section>
  );
};
