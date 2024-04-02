import ScrollBar from '../ScrollBar/ScrollBar';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import ModalBackdrop from 'shared/components/ModalBackdrop/ModalBackdrop';

import s from './AllTestimonials.module.scss';
import { sprite } from 'shared/icons';

const AllTestimonials = ({ testimonials, onClose }) => {
  const cardStyles = {
    text: s.textInModal,
    quote: s.quoteInModal,
    footer: s.footerInModal,
  };
  return (
    <ModalBackdrop onClick={onClose}>
      <div className={s.testimonialsModal} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h2>Відгуки моїх клієнітів</h2>
          <div>
            <button className={s.closeButton} onClick={onClose}>
              <svg className={s.icon}>
                <use xlinkHref={`${sprite}#icon-cross`}></use>
              </svg>
            </button>
          </div>
        </div>
        <ScrollBar>
          <div className={s.cardsContainer}>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                className={s.testimonialCardInModal}
                styles={cardStyles}
              />
            ))}
          </div>
        </ScrollBar>
      </div>
    </ModalBackdrop>
  );
};

export default AllTestimonials;
