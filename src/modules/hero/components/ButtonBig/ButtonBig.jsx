import Button from 'shared/components/BigButton/BigButton';
import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import { ModalConsultation } from 'modules/modalConsultation';
const ButtonBig = () => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  return <Button onClick={handleClick}>Безкоштовна консультація</Button>;
};
export default ButtonBig;
