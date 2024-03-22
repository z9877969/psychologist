import { sprite } from 'shared/icons';
import s from './FooterAddress.module.scss';
import InstagramIcon from '../InstagramIcon/InstagramIcon';

const FooterAddress = () => {
  return (
    <address className={s.address}>
      <p className={s.subTitle}>Контакти</p>
      <a className={s.tell} href="tel:+380653456789">
        +380 65 345 67 89
      </a>
      <ul className={s.list}>
        <li>
          <a target="_blank" href="https://t.me/irynaprudko">
            <svg className={`${s.icon} ${s.telegram}`} width={32} height={32}>
              <use xlinkHref={`${sprite}#icon-telegram-great`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className={s.facebook}
            href="https://www.facebook.com/IrynaVoytovich"
          >
            <svg className={s.icon} width={32} height={32}>
              <use xlinkHref={`${sprite}#icon-facebook-great`}></use>
            </svg>
          </a>
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <a
            target="_blank"
            href="https://youtube.com/@Iryna_Prudko?si=QXr1T4_bj6Fomes6"
          >
            <svg className={`${s.icon} ${s.youtybe}`} width={32} height={32}>
              <use xlinkHref={`${sprite}#icon-youtube-great`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default FooterAddress;
