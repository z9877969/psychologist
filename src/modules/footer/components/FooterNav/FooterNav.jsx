import { Link, NavLink, useNavigate } from 'react-router-dom';
import s from './FooterNav.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import LogoImg from 'shared/components/LogoImg/LogoImg';

const FooterNav = () => {
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
          <a href="#about" onClick={handleRedirect} className={s.link}>
            Про мене
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleRedirect} className={s.link}>
            Послуги
          </a>
        </li>
      </ul>
      <ul className={s.list}>
        <li>
          <p className={s.subTitle}>Інше</p>
        </li>
        <li>
          <a
            href="#reviews"
            onClick={handleRedirect}
            className={clsx(s.link, s.linkRev)}
          >
            Відгуки
          </a>
        </li>
        <li>
          <Link to="/blog" onClick={scrollToTop} className={s.link}>
            Блог
          </Link>
        </li>
        <li>
          <a href="#faq" onClick={handleRedirect} className={s.link}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
