import { Picture } from 'shared/components';
import s from './Modal.module.scss';
import { sprite } from 'shared/icons';
import { useModal } from 'context/ModalProvider';
import { useCallback } from 'react';

export default function Modal({ imageUrl }) {
  const setModal = useModal();
  const closeModal = useCallback(() => setModal(), [setModal]);
  return (
    <div className={s.modal}>
      <div className={s.container}>
        <button className={s.btnClose} onClick={closeModal}>
          <svg className={s.icon} width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
        <div className={s.imgWrap}>
          <Picture
            defaultImage={imageUrl}
            className={s.image}
            height="85%"
            width="auto"
          />
        </div>
      </div>
    </div>
  );
}
