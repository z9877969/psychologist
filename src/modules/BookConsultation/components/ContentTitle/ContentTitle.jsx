import s from './ContentTitle.module.scss';

const ContentTitle = () => {
  return (
    <h2 className={s.title}>
      Забронюй безкоштовну <span>консультацію</span>
    </h2>
  );
};

export default ContentTitle;
