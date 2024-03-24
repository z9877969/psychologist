import s from './Grid.module.scss';

const Grid = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};

export default Grid;
