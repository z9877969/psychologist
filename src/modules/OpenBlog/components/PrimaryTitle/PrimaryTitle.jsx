import s from './PrimaryTitle.module.scss';

export const PrimaryTitle = ({ content }) => {
  return (
    <div className={s.wraperTitle}>
      <p className={s.cartion}>{content}</p>
    </div>
  );
};
