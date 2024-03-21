import Button from 'shared/components/BigButton/BigButton';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import s from './Content.module.scss';

const Content = () => {
  const handleClick = () => {};
  return (
    <div className={s.content}>
      <ContentTitle />
      <ContentText />
      <Button onClick={handleClick}>Записатися</Button>
    </div>
  );
};

export default Content;
