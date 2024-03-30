import s from './WrapDesctopBlogPage.module.scss';

const WrapDesctopBlogPage = ({ children }) => {
  return <div className={s.wraper}>{children}</div>;
};

export default WrapDesctopBlogPage;
