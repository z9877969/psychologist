import s from './ContentTitle.module.scss';

const ContentTitle = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

export default ContentTitle;
