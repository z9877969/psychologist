import s from './ScrollBar.module.scss';
const ScrollBar = ({ children }) => {
  return <div className={s.scrollBar}>{children}</div>;
};

export default ScrollBar;
