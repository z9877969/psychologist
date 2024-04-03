import ScrollBar from '../ScrollBar/ScrollBar';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import s from './AllTestimonials.module.scss';
import { sprite } from 'shared/icons';

const AllTestimonials = ({ testimonials, onClose }) => {
  return (
    <div className={s.testimonialsModal}>
      <h2 className={s.title}>Відгуки моїх клієнітів</h2>
      <button onClick={onClose} className={s.closeButton}>
        <svg className={s.svg}>
          <use xlinkHref={`${sprite}#icon-cross`}></use>
        </svg>
      </button>

      <ScrollBar>
        <div className={s.cardsContainer}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              isLimitation={false}
            />
          ))}
        </div>
      </ScrollBar>
    </div>
  );
};

export default AllTestimonials;
