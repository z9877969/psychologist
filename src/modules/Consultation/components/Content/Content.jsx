import { SectionDescription } from 'shared/components';
import ContentList from '../ContentList/ContentList';
import ContentTitle from '../ContentTitle/ContentTitle';
import s from './Content.module.scss';

const Content = ({ list, title, descr }) => {
  return (
    <div className={s.content}>
      <ContentTitle title={title} />
      <SectionDescription descr={descr} />
      <ContentList abilities={list} />
    </div>
  );
};

export default Content;
