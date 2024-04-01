import Button from 'shared/components/BigButton/BigButton';
import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import { ModalConsultation } from 'modules/modalConsultation';
import s from './ButtonBig.module.scss';

const ButtonBig = () => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  return (
    <Button onClick={handleClick} className={s.button}>
      Безкоштовна консультація
    </Button>
  );
};
export default ButtonBig;
