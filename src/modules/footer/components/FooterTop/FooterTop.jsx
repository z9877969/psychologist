import { Container } from 'shared/components';
import s from './FooterTop.module.scss';
import FooterNav from '../FooterNav/FooterNav';
import FooterAddress from '../FooterAddress/FooterAddress';

const FooterTop = () => {
  return (
    <div className={s.footer}>
      <Container>
        <div className={s.footerContainer}>
          <FooterNav />
          <FooterAddress />
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
