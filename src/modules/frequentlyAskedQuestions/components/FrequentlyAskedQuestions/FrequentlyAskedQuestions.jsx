import { Container } from 'shared/components';
import s from './FrequentlyAskedQuestions.module.scss';
import imgMobail from '../../img/photoFAQmobail.jpg';
import imgTablet from '../../img/photoFAQtablet.jpg';
import imgDesk from '../../img/photoFAQdesk.jpg';
import ScrollBar from '../ScrollBar/ScrollBar';
import FAQList from '../FAQList/FAQList';
import Picture from 'shared/components/PIcture/Picture';

const getSrc = () => {
  const width = parseInt(
    getComputedStyle(document.querySelector('body')).width
  );
  if (width < 768) return [343, 343];
  if (width < 1440) return [688, 532];
  return [708, 708];
};

const FrequentlyAskedQuestions = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.container}>
          <div className={s.imgContainer}>
            <Picture
              urlMobile={imgMobail}
              urlMobile2x={imgMobail}
              urlTablet={imgTablet}
              urlTablet2x={imgTablet}
              urlDesktop={imgDesk}
              urlDesktop2x={imgDesk}
              width={getSrc()[0]}
              height={getSrc()[1]}
            />
          </div>

          <div>
            <h2 className={s.title}>FAQ</h2>
            <ScrollBar>
              <FAQList />
            </ScrollBar>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FrequentlyAskedQuestions;
