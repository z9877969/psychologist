import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/');
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToSection();
  }, []);

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
                <a
                  className={s.headerListLink}
                  href="#about"
                  onClick={() => {
                    onClose();
                    handleRedirect();
                  }}
                >
                  Про мене
                </a>
              </li>
              <li className={s.headerListItem}>
                <a
                  className={s.headerListLink}
                  href="#services"
                  onClick={() => {
                    onClose();
                    handleRedirect();
                  }}
                >
                  Послуги
                </a>
              </li>
              <li className={s.headerListItem}>
                <a
                  className={s.headerListLink}
                  href="#reviews"
                  onClick={() => {
                    onClose();
                    handleRedirect();
                  }}
                >
                  Відгуки
                </a>
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
                <a
                  className={s.headerListLink}
                  href="#faq"
                  onClick={() => {
                    onClose();
                    handleRedirect();
                  }}
                >
                  FAQ
                </a>
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
