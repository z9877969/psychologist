import s from './ErrorSpan.module.scss';
import { sprite } from 'shared/icons';
const ErrorSpan = ({ children }) => {
  return (
    <span className={s.span}>
      <svg className={s.icon} width={8} height={8}>
        <use xlinkHref={`${sprite}#icon-star`}></use>
      </svg>
      {children}
    </span>
  );
};

export default ErrorSpan;
