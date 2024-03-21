import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';
const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li className={s.headerListItem}>
          <NavLink className={s.headerListLink} to="/">
            Головна
          </NavLink>
        </li>
        <li className={s.headerListItem}>
          <a className={s.headerListLink} href="#about">
            Про мене
          </a>
        </li>
        <li className={s.headerListItem}>
          <a className={s.headerListLink} href="#services">
            Послуги
          </a>
        </li>
        <li className={s.headerListItem}>
          <a className={s.headerListLink} href="#reviews">
            Відгуки
          </a>
        </li>
        <li className={s.headerListItem}>
          <NavLink className={s.headerListLink} to="/blog"></NavLink>
        </li>
        <li className={s.headerListItem}>
          <a className={s.headerListLink} href="#faq">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
