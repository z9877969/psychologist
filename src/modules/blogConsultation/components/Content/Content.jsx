import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import s from './Content.module.scss';
import Button from 'shared/components/BigButton/BigButton';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';

const Content = () => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(
      <div style={{ backgroundColor: 'green', padding: 50 }}>
        <p style={{ color: 'white', padding: 100 }}>SomeComponent</p>
      </div>
    );
  }, [showModal]);

  return (
    <div className={s.content}>
      <ContentTitle>Записатися до Ірини</ContentTitle>
      <ContentText />
      <Button onClick={handleClick}>Безкоштовна консультація</Button>
    </div>
  );
};

export default Content;
