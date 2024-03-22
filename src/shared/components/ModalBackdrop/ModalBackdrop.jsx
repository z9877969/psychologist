import { useCallback, useEffect } from 'react';
import s from './ModalBackdrop.module.scss';

const ModalBackdrop = ({ children, onClose }) => {
  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.body.removeAttribute('style');
    };
  }, [handleCloseModal]);

  return (
    <div className={s.backdrop} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
