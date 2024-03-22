import s from './TestimonialCard.module.scss';
import { formatAge } from '../../utils/formAge';

function TestimonialCard({ testimonial }) {
  return (
    <div className={s.card}>
      <p className={s.quote}>“</p>
      <p className={s.text}>{`"${testimonial.text}"`}</p>
      <p className={s.footer}>
        {testimonial.author}, {formatAge(testimonial.age)}
      </p>
    </div>
  );
}

export default TestimonialCard;
