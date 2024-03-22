import s from './PrimaryTitle.module.scss';

export const PrimaryTitle = ({ content }) => {
  return <h1 className={s.cartion}>{content}</h1>;
};
