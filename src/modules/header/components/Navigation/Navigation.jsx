import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import s from './Navigation.module.scss';
import { useEffect } from 'react';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.headerListLink, isActive && s.active);
};
const Navigation = () => {
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
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li className={s.headerListItem}>
          <NavLink
            exact="true"
            className={buildLinkClass}
            to="/"
            onClick={scrollToTop}
          >
            Головна
          </NavLink>
        </li>
        <li className={s.headerListItem}>
          <a
            className={s.headerListLink}
            href="#about"
            onClick={handleRedirect}
          >
            Про мене
          </a>
        </li>
        <li className={s.headerListItem}>
          <a
            className={s.headerListLink}
            href="#services"
            onClick={handleRedirect}
          >
            Послуги
          </a>
        </li>
        <li className={s.headerListItem}>
          <a
            className={s.headerListLink}
            href="#reviews"
            onClick={handleRedirect}
          >
            Відгуки
          </a>
        </li>
        <li className={s.headerListItem}>
          <NavLink className={buildLinkClass} to="/blog" onClick={scrollToTop}>
            Блог
          </NavLink>
        </li>
        <li className={s.headerListItem}>
          <a className={s.headerListLink} href="#faq" onClick={handleRedirect}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
