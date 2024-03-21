import { Link } from 'react-router-dom';
import s from './Button.module.scss';

const Button = ({ to, children }) => {
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};
export default Button;
