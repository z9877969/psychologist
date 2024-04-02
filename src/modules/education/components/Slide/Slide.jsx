import { Picture } from 'shared/components';
import s from './Slide.module.scss';
import { useModal } from 'context/ModalProvider';
import Modal from '../Modal/Modal';

export default function Slide({ text, ...props }) {
  const setModal = useModal();
  return (
    <div className={s.slide} onClick={() => setModal(<Modal {...props} />)}>
      <div className={s.frame}>
        <Picture {...props} className={s.picture} />
      </div>
      <p className={s.sliderText}>{text}</p>
    </div>
  );
}
