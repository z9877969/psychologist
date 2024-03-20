import ContentList from '../ContentList/ContentList';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import s from './Content.module.scss';

const Content = ({ abilities }) => {
  return (
    <div className={s.content}>
      <ContentTitle />
      <ContentText />
      <ContentList abilities={abilities} />
    </div>
  );
};

export default Content;
