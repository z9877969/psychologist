import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import s from './Content.module.scss';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTitle />
      <ContentText />
    </div>
  );
};

export default Content;
