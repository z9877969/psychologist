import { useModal } from 'context/ModalProvider';
import TestimonialForm from '../TestimonialForm/TestimonialForm';
import s from './ButtonGroup.module.scss';

const ButtonGroup = () => {
  const setModal = useModal();

  const handleLeaveReviewClick = () => {
    setModal(<TestimonialForm onClose={() => setModal(null)} />);
  };
  return (
    <div className={s.btnGroup}>
      <button className={s.btn}>Переглянути всі відгуки</button>
      <button className={s.btn} onClick={handleLeaveReviewClick}>
        Залишити відгук
      </button>
    </div>
  );
};

export default ButtonGroup;
