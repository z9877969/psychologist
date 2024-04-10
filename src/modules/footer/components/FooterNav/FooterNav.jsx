import { Link, NavLink, useNavigate } from 'react-router-dom';
import s from './FooterNav.module.scss';
import clsx from 'clsx';
import LogoImg from 'shared/components/LogoImg/LogoImg';
import scrollToSection from 'modules/header.3/helpers';

const FooterNav = () => {
  const navigate = useNavigate();

  const handleRedirect = async (sectionId) => {
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
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <a href="/">
            <LogoImg className={s.logo} />
          </a>
        </li>
        <li>
          <NavLink exact="true" className={s.link} to="/" onClick={scrollToTop}>
            Головна
          </NavLink>
        </li>
        <li>
          <button onClick={() => handleRedirect('about')} className={s.link}>
            Про мене
          </button>
        </li>
        <li>
          <button onClick={() => handleRedirect('services')} className={s.link}>
            Послуги
          </button>
        </li>
      </ul>
      <ul className={s.list}>
        <li>
          <p className={s.subTitle}>Інше</p>
        </li>
        <li>
          <button
            onClick={() => handleRedirect('reviews')}
            className={clsx(s.link, s.linkRev)}
          >
            Відгуки
          </button>
        </li>
        <li>
          <Link to="/blog" onClick={scrollToTop} className={s.link}>
            Блог
          </Link>
        </li>
        <li>
          <button onClick={() => handleRedirect('faq')} className={s.link}>
            FAQ
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
