import { pasteAccentPhrase } from 'shared/helpers';
import s from './ContentTitle.module.scss';

const ContentTitle = ({ title, accent }) => {
  const accentedTitle = pasteAccentPhrase(title, accent).map(
    ({ type, value }, i) =>
      type === 'accent' ? <span key={i}>{value}</span> : value
  );

  return <h2 className={s.title}>{accentedTitle}</h2>;
};

export default ContentTitle;
