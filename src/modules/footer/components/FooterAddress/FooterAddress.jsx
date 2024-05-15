import { sprite } from 'shared/icons';
import s from './FooterAddress.module.scss';
import InstagramIcon from '../InstagramIcon/InstagramIcon';
import { useMainPage } from 'hooks/useMainPage';

const FooterAddress = () => {
  const page = useMainPage();
  const { footerSection } = page || {};
  return (
    <address className={s.address}>
      <p className={s.subTitle}>Контакти</p>
      <a className={s.tell} href={`tel:${footerSection?.phone ?? ''}`}>
        {footerSection?.displayingPhone ?? ''}
      </a>
      <ul className={s.list}>
        <li>
          <a target="_blank" href={footerSection?.telegramLink ?? ''}>
            <svg className={`${s.icon} ${s.telegram}`} width={32} height={32}>
              <use xlinkHref={`${sprite}#icon-telegram-great`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className={s.facebook}
            href={footerSection?.facebookLink ?? ''}
          >
            <svg className={s.icon} width={32} height={32}>
              <use xlinkHref={`${sprite}#icon-facebook-great`}></use>
            </svg>
          </a>
        </li>
        <li>
          <InstagramIcon href={footerSection?.instagramLink ?? ''} />
        </li>
        <li>
          <a target="_blank" href={footerSection?.youtubeLink ?? ''}>
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
