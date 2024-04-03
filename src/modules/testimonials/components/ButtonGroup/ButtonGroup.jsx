import { useState } from 'react';
import ModalBackdrop from 'shared/components/ModalBackdrop/ModalBackdrop';
import AllTestimonials from '../AllTestimonials/AllTestimonials';
import LeaveReviewModal from '../LeaveReviewModal/LeaveReviewModal';
import s from './ButtonGroup.module.scss';
import clsx from 'clsx';
import { useModal } from 'context/ModalProvider';
import { ModalRevie } from 'modules/modalRevie';

const ButtonGroup = ({ testimonials }) => {
  const setModal = useModal();
  const [showTestimonialsModal, setShowTestimonialsModal] = useState(false);
  const [showLeaveReviewModal, setShowLeaveReviewModal] = useState(false);

  const handleShowAllTestimonials = () => {
    setShowTestimonialsModal(true);
  };

  const handleCloseModal = () => {
    setShowTestimonialsModal(false);
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
        Переглянути всі відгуки
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
        onClick={() => setModal(<ModalRevie />)}
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
