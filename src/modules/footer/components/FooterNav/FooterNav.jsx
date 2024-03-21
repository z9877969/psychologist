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
          <a href="" className={s.link}>
            Головна
          </a>
        </li>
        <li>
          <a href="" className={s.link}>
            Про мене
          </a>
        </li>
        <li>
          <a href="" className={s.link}>
            Послуги
          </a>
        </li>
      </ul>
      <ul className={s.list}>
        <li>
          <p className={s.subTitle}>Інше</p>
        </li>
        <li>
          <a href="" className={s.link}>
            Відгуки
          </a>
        </li>
        <li>
          <a href="" className={s.link}>
            Блог
          </a>
        </li>
        <li>
          <a href="" className={s.link}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
