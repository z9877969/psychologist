import ScrollBar from '../ScrollBar/ScrollBar';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import s from './AllTestimonials.module.scss';

const AllTestimonials = ({ testimonials, onClose }) => {
  return (
    <div className={s.testimonialsModal}>
      <div className={s.modalHeader}>
        <h2>Відгуки моїх клієнітів</h2>
        <button onClick={onClose} className={s.closeButton}>
          ×
        </button>
      </div>
      <ScrollBar>
        <div className={s.cardsContainer}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </ScrollBar>
    </div>
  );
};

export default AllTestimonials;
