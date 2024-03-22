import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className={`${s.mobileMenuContainer} ${isOpen ? s.open : ''}`}>
          <nav className={s.navigation}>
            <ul className={s.navigationList}>
              <li className={s.headerListItem}>
                <NavLink className={s.headerListLink} to="/" onClick={onClose}>
                  Головна
                </NavLink>
              </li>
              <li className={s.headerListItem}>
                <a className={s.headerListLink} href="#about" onClick={onClose}>
                  Про мене
                </a>
              </li>
              <li className={s.headerListItem}>
                <a
                  className={s.headerListLink}
                  href="#services"
                  onClick={onClose}
                >
                  Послуги
                </a>
              </li>
              <li className={s.headerListItem}>
                <a
                  className={s.headerListLink}
                  href="#reviews"
                  onClick={onClose}
                >
                  Відгуки
                </a>
              </li>
              <li className={s.headerListItem}>
                <NavLink
                  className={s.headerListLink}
                  to="/blog"
                  onClick={onClose}
                >
                  Блог
                </NavLink>
              </li>
              <li className={s.headerListItem}>
                <a className={s.headerListLink} href="#faq" onClick={onClose}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
