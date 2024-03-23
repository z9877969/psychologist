import s from './ContentTitle.module.scss';

const ContentTitle = ({ children, ...props }) => {
  return (
    <h2 className={s.title} {...props}>
      {children}
    </h2>
  );
};

export default ContentTitle;
