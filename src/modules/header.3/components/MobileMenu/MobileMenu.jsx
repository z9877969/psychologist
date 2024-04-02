import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';
import Backdrop from '../Backdrop/Backdrop';

import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const handleMenuItemClick = async (sectionId) => {
    onClose();
    await navigate('/');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={s.mainBox}>
      {isOpen && (
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
      )}
      <Backdrop show={isOpen} onClick={onClose} />
    </div>
  );
};

export default MobileMenu;
