import Button from 'shared/components/BigButton/BigButton';
import ContentText from '../ContentText/ContentText';
import s from './Content.module.scss';
import ContentTitle from '../ContentTitle/ContentTitle';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTitle>Записатися до Ірини</ContentTitle>
      <ContentText />
      <Button>Безкоштовна консультація</Button>
    </div>
  );
};

export default Content;
