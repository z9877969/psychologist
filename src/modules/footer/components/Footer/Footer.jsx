import FooterBottom from '../FooterBottom/FooterBottom';
import FooterTop from '../FooterTop/FooterTop';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
