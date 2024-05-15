import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import s from './Content.module.scss';
import Button from 'shared/components/BigButton/BigButton';
import ContentTitle from '../ContentTitle/ContentTitle';
import { ModalConsultation } from 'modules/modalConsultation';
import { SectionDescription } from 'shared/components';

const Content = ({ title, accent, descr }) => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  return (
    <div className={s.content}>
      <ContentTitle title={title} accent={accent} />
      <SectionDescription descr={descr} />
      <Button onClick={handleClick}>Записатися</Button>
    </div>
  );
};

export default Content;
