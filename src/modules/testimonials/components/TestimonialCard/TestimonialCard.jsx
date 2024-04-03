import s from './TestimonialCard.module.scss';
import { formatAge } from '../../utils/formatAge';
import clsx from 'clsx';
import { sprite } from 'shared/icons';

function TestimonialCard({ text, age, author, isLimitation = true }) {
  return (
    <div className={clsx(s.card, isLimitation && s.cardLimit)}>
      <p className={clsx(s.text, isLimitation && s.limit)}>{`"${text}"`}</p>

      <p className={s.footer}>
        {author}, {formatAge(age)}
      </p>
      <svg className={s.svg}>
        <use xlinkHref={`${sprite}#icon-element-text-right`}></use>
      </svg>
    </div>
  );
}

export default TestimonialCard;
