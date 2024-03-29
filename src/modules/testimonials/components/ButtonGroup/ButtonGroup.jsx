import { useState } from 'react';
import ModalBackdrop from 'shared/components/ModalBackdrop/ModalBackdrop';
import AllTestimonials from '../AllTestimonials/AllTestimonials';
import LeaveReviewModal from '../LeaveReviewModal/LeaveReviewModal';
import s from './ButtonGroup.module.scss';
import clsx from 'clsx';

const ButtonGroup = ({ testimonials }) => {
  const [showTestimonialsModal, setShowTestimonialsModal] = useState(false);
  const [showLeaveReviewModal, setShowLeaveReviewModal] = useState(false);

  const handleShowAllTestimonials = () => {
    setShowTestimonialsModal(true);
  };

  const handleCloseModal = () => {
    setShowTestimonialsModal(false);
  };

  const handleShowLeaveReview = () => {
    setShowLeaveReviewModal(true);
  };

  const handleCloseLeaveReviewModal = () => {
    setShowLeaveReviewModal(false);
  };

  const handleLeaveReviewSubmit = (values, { setSubmitting, resetForm }) => {
    // Ваша логіка для додавання відгуку ТУТ
    // console.log('Відгук додано:', values);
    setSubmitting(false);
    resetForm();
    handleCloseLeaveReviewModal();
  };

  return (
    <div className={s.btnGroup}>
      <button
        className={clsx(s.btn, s.btnFirst)}
        onClick={handleShowAllTestimonials}
      >
        Показати всі відгуки
      </button>
      {showTestimonialsModal && (
        <ModalBackdrop onClose={handleCloseModal}>
          <AllTestimonials
            onClose={handleCloseModal}
            testimonials={testimonials}
          />
        </ModalBackdrop>
      )}
      <button
        className={clsx(s.btn, s.btnSecond)}
        onClick={handleShowLeaveReview}
      >
        Залишити відгук
      </button>
      {showLeaveReviewModal && (
        <LeaveReviewModal
          onClose={handleCloseLeaveReviewModal}
          onSubmit={handleLeaveReviewSubmit}
        />
      )}
    </div>
  );
};

export default ButtonGroup;
