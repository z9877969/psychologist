import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import s from './Navigation.module.scss';
import scrollToSection from 'modules/header.3/helpers';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.headerListLink, isActive && s.active);
};
const Navigation = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = async (sectionId) => {
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
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li className={s.headerListItem} style={{ minWidth: '66px' }}>
          <NavLink
            exact="true"
            className={buildLinkClass}
            to="/"
            onClick={scrollToTop}
          >
            Головна
          </NavLink>
        </li>
        <li className={s.headerListItem} style={{ minWidth: '75px' }}>
          <button
            className={s.headerListLink}
            onClick={() => {
              handleMenuItemClick('about');
            }}
          >
            Про мене
          </button>
        </li>
        <li className={s.headerListItem} style={{ minWidth: '65px' }}>
          <button
            className={s.headerListLink}
            onClick={() => {
              handleMenuItemClick('services');
            }}
          >
            Послуги
          </button>
        </li>
        <li className={s.headerListItem} style={{ minWidth: '59px' }}>
          <button
            className={s.headerListLink}
            onClick={() => {
              handleMenuItemClick('reviews');
            }}
          >
            Відгуки
          </button>
        </li>
        <li className={s.headerListItem} style={{ minWidth: '36px' }}>
          <NavLink className={buildLinkClass} to="/blog" onClick={scrollToTop}>
            Блог
          </NavLink>
        </li>
        <li className={s.headerListItem} style={{ minWidth: '32px' }}>
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
  );
};

export default Navigation;
