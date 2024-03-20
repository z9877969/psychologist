import { Container } from 'shared/components';
import s from './FrequentlyAskedQuestions.module.scss';
import imgMobail from '../../img/photoFAQmobail.jpg';
import imgTablet from '../../img/photoFAQtablet.jpg';
import imgDesk from '../../img/photoFAQdesk.jpg';
import ScrollBar from '../ScrollBar/ScrollBar';
import FAQList from '../FAQList/FAQList';

const getSrc = () => {
  const width = parseInt(
    getComputedStyle(document.querySelector('body')).width
  );
  if (width < 768) return imgMobail;
  if (width < 1440) return imgTablet;
  return imgDesk;
};

const FrequentlyAskedQuestions = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.container}>
          <div className={s.imgContainer}>
            <img src={getSrc()} alt="" />
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
