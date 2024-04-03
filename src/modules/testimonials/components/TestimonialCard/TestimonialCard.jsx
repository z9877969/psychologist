import s from './TestimonialCard.module.scss';
import { formatAge } from '../../utils/formatAge';
import clsx from 'clsx';

function TestimonialCard({ text, age, author, isLimitation = true }) {
  return (
    <div className={clsx(s.card, isLimitation && s.cardLimit)}>
      {/* <p className={s.quote}>“</p> */}

      <p className={clsx(s.text, isLimitation && s.limit)}>{`"${text}"`}</p>

      <p className={s.footer}>
        {author}, {formatAge(age)}
      </p>
    </div>
  );
}

export default TestimonialCard;
