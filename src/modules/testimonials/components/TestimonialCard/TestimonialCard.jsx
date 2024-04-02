import s from './TestimonialCard.module.scss';
import { formatAge } from '../../utils/formatAge';
import { sprite } from 'shared/icons';

function TestimonialCard({ text, age, author, className, styles }) {
  return (
    <div className={className ? className : s.card}>
      <svg className={styles && styles.quote ? styles.quote : s.quote}>
        <use xlinkHref={`${sprite}#icon-quote`}></use>
      </svg>
      <p
        className={styles && styles.text ? styles.text : s.text}
      >{`"${text}"`}</p>
      <p className={styles && styles.footer ? styles.footer : s.footer}>
        {author}, {formatAge(age)}
      </p>
    </div>
  );
}

export default TestimonialCard;
