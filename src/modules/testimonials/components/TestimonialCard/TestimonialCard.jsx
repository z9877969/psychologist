import s from './TestimonialCard.module.scss';
import { formatAge } from '../../utils/formatAge';

function TestimonialCard({ text, age, author }) {
  return (
    <div className={s.card}>
      <p className={s.quote}>“</p>
      <p className={s.text}>{`"${text}"`}</p>
      <p className={s.footer}>
        {author}, {formatAge(age)}
      </p>
    </div>
  );
}

export default TestimonialCard;
