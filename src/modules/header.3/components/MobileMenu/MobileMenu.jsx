import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';
import scrollToSection from 'modules/header.3/helpers';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line
  }, [location, pathname]);
  const navigate = useNavigate();

  const handleMenuItemClick = async (sectionId) => {
    onClose();
    await navigate('/');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={`${s.mobileMenuContainer} ${isOpen ? s.open : ''}`}>
      <nav className={s.navigation}>
        <ul className={s.navigationList}>
          <li className={s.headerListItem}>
            <NavLink
              className={s.headerListLink}
              to="/"
              onClick={() => {
                onClose();
                scrollToTop();
              }}
              exact="true"
            >
              Головна
            </NavLink>
          </li>
          <li className={s.headerListItem}>
            <button
              className={s.headerListLink}
              onClick={() => {
                handleMenuItemClick('about');
              }}
            >
              Про мене
            </button>
          </li>
          <li className={s.headerListItem}>
            <button
              className={s.headerListLink}
              onClick={() => {
                handleMenuItemClick('services');
              }}
            >
              Послуги
            </button>
          </li>
          <li className={s.headerListItem}>
            <button
              className={s.headerListLink}
              onClick={() => {
                handleMenuItemClick('reviews');
              }}
            >
              Відгуки
            </button>
          </li>
          <li className={s.headerListItem}>
            <NavLink
              className={s.headerListLink}
              to="/blog"
              onClick={() => {
                onClose();
                scrollToTop();
              }}
            >
              Блог
            </NavLink>
          </li>
          <li className={s.headerListItem}>
            <button
              className={s.headerListLink}
              onClick={() => {
                handleMenuItemClick('faq');
              }}
            >
              FAQ
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
