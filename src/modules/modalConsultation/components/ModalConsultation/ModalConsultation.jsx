import s from './ModalConsultation.module.scss';
import MyPicture from '../MyPicture/MyPicture';
import { sprite } from 'shared/icons';
import FormConsultation from '../FormConsultation/FormConsultation';
import { useModal } from 'context/ModalProvider';
import { useCallback } from 'react';

const ModalConsultation = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => setModal(), [setModal]);

  return (
    <div style={{ paddingBottom: 40 }}>
      <div className={s.modal}>
        <div className={s.container}>
          <button className={s.btnClose} onClick={closeModal}>
            <svg className={s.icon} width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-cross`}></use>
            </svg>
          </button>
          <div className={s.imgContainer}>
            <MyPicture />
          </div>
          <div className={s.formContainer}>
            <h2 className={s.title}>Записатися на консультацію</h2>
            <button className={s.btnSecond} onClick={() => closeModal()}>
              <svg className={s.icon} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-cross`}></use>
              </svg>
            </button>
            <FormConsultation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConsultation;
