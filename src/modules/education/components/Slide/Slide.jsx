import { Picture } from 'shared/components';
import s from './Slide.module.scss';
import { useModal } from 'context/ModalProvider';
import Modal from '../Modal/Modal';

export default function Slide({ text, ...props }) {
  const setModal = useModal();

  const handleClick = () => setModal(<Modal {...props} />);

  return (
    <div className={s.slide} onClick={handleClick}>
      <div className={s.frame}>
        <Picture {...props} className={s.picture} />
      </div>
      <button className={s.sliderText} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
