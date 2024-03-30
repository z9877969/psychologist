import s from './ModalRevie.module.scss';
import { sprite } from 'shared/icons';
import { useModal } from 'context/ModalProvider';
import { useCallback } from 'react';
import MyPicture from '../MyPicture/MyPicture';
import FormRevie from '../FormRevie/FormRevie';

const ModalRevie = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => setModal(), [setModal]);
  return (
    <div className={s.modal}>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <MyPicture />
          <button className={s.btnClose} onClick={closeModal}>
            <svg className={s.icon} width={28} height={28}>
              <use xlinkHref={`${sprite}#icon-cross`}></use>
            </svg>
          </button>
        </div>
        <div className={s.formContainer}>
          <h2 className={s.title}>Залишити відгук</h2>
          <button className={s.btnSecond} onClick={() => closeModal()}>
            <svg className={s.icon} width={28} height={28}>
              <use xlinkHref={`${sprite}#icon-cross`}></use>
            </svg>
          </button>
          <FormRevie />
        </div>
      </div>
    </div>
  );
};

export default ModalRevie;
