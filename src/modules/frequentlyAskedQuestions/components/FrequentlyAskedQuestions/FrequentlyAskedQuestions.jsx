import { Container } from 'shared/components';
import s from './FrequentlyAskedQuestions.module.scss';
import imgMobail from '../../img/photoFAQmobail.jpg';
import imgMobail2x from '../../img/photoFAQmobail2x.jpg';
import imgTablet from '../../img/photoFAQtablet.jpg';
import imgTablet2x from '../../img/photoFAQtablet2x.jpg';
import imgDesk from '../../img/photoFAQdesk.jpg';
import imgDesk2x from '../../img/photoFAQdesk2x.jpg';
import ScrollBar from '../ScrollBar/ScrollBar';
import FAQList from '../FAQList/FAQList';
import { Picture } from 'shared/components';

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
    <section id="faq" className={s.section}>
      <Container>
        <div className={s.container}>
          <div className={s.imgContainer}>
            <div>
              <Picture
                urlMobile={imgMobail}
                urlMobile2x={imgMobail2x}
                urlTablet={imgTablet}
                urlTablet2x={imgTablet2x}
                urlDesktop={imgDesk}
                urlDesktop2x={imgDesk2x}
                width={getSrc()[0]}
                height={getSrc()[1]}
              />
            </div>
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
