import { Container } from 'shared/components';
import s from './FooterBottom.module.scss';
const FooterBottom = () => {
  return (
    <div className={s.footer}>
      <Container>
        <div className={s.container}>
          <p className={s.text}>© Ірина Прудько | 2024</p>
          <a href="" className={s.link}>
            created by GoIT students
          </a>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
