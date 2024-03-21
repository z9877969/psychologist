import { Link } from 'react-router-dom';
import s from './FooterNav.module.scss';

const FooterNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <a href="/" className={s.logo}>
            Iryna Prudko
          </a>
        </li>
        <li>
          <a href="/" className={s.link}>
            Головна
          </a>
        </li>
        <li>
          <a href="#about" className={s.link}>
            Про мене
          </a>
        </li>
        <li>
          <a href="#services" className={s.link}>
            Послуги
          </a>
        </li>
      </ul>
      <ul className={s.list}>
        <li>
          <p className={s.subTitle}>Інше</p>
        </li>
        <li>
          <a href="#reviews" className={s.link}>
            Відгуки
          </a>
        </li>
        <li>
          <Link to="/blog" className={s.link}>
            Блог
          </Link>
        </li>
        <li>
          <a href="#faq" className={s.link}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
