import { Picture } from 'shared/components';
import { useCallback } from 'react';
import s from './Slide.module.scss';
import { useModal } from 'context/ModalProvider';
import Modal from '../Modal/Modal';

export default function Slide({ text, imageUrl, ...props }) {
  const setModal = useModal();

  const handleClick = useCallback(
    () => setModal(<Modal imageUrl={imageUrl} />),
    [imageUrl, setModal]
  );

  return (
    <div className={s.slide} onClick={handleClick}>
      <div className={s.frame}>
        <Picture
          {...props}
          className={s.picture}
          pictureClassName={s.pictureWrapper}
          defaultImage={imageUrl}
        />
      </div>
      <button className={s.sliderText}>{text}</button>
    </div>
  );
}
