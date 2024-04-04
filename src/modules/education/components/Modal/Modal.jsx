import { Picture } from 'shared/components';
import s from './Modal.module.scss';
import { sprite } from 'shared/icons';
import { useModal } from 'context/ModalProvider';
import { useCallback } from 'react';

export default function Modal(props) {
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
            urlMobile={props.urlMobile}
            urlMobile2x={props.urlMobile2x}
            urlTablet={props.urlTablet}
            urlTablet2x={props.urlTablet2x}
            urlDesktop={props.urlDesktop}
            urlDesktop2x={props.urlDesktop2x}
            height="100%"
            width="auto"
          />
        </div>
      </div>
    </div>
  );
}
