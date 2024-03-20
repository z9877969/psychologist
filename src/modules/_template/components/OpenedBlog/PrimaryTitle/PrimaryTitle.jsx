import s from './PrimaryTitle.module.scss';

export const PrimaryTitle = ({ content }) => {
  return (
    <div className={s.wraperTitle}>
      <h1>{content}</h1>
    </div>
  );
};
