import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import s from './Content.module.scss';
import Button from 'shared/components/BigButton/BigButton';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import { ModalConsultation } from 'modules/modalConsultation';

const Content = () => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  return (
    <div className={s.content}>
      <ContentTitle />
      <ContentText />
      <Button onClick={handleClick}>Записатися</Button>
    </div>
  );
};

export default Content;
