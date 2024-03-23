import Button from 'shared/components/BigButton/BigButton';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import s from './Content.module.scss';
import { ModalProvider, useModal } from 'context/ModalProvider';

const Content = () => {
  const showModal = useModal();

  const handleClick = () => {
    showModal(
      <ModalProvider>
        <div style={{ backgroundColor: 'green', padding: 50 }}>
          <p style={{ color: 'white', padding: 100 }}>SomeComponent</p>
        </div>
      </ModalProvider>
    );
  };
  return (
    <div className={s.content}>
      <ContentTitle />
      <ContentText />
      <Button onClick={handleClick}>Записатися</Button>
    </div>
  );
};

export default Content;
