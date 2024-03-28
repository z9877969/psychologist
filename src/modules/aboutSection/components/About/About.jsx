import s from './About.module.scss';
import { Container, Picture } from 'shared/components';

import * as images from '../../img';
import aboutData from '../../data/aboutData.json';

export default function About() {
  return (
    <section id="about" className={s.section}>
      <Container className={s.container}>
        <div className={s.aboutWrapper}>
          <div className={s.textWrapper}>
            <h2 className={s.title}>
              Ірина Прудько
              <br />
              <span className={s.accent}> психолог</span> - консультант
            </h2>
            <p className={s.topText}>
              Активно продовжую професійне навчання, зокрема у напрямку
              психоконсультування. Мій підхід інтегрує елементи
              когнітивно-поведінкової терапії, основи психоаналізу та техніки
              позитивної психології. Це дозволяє мені створювати гнучкі та
              ефективні стратегії для роботи з різноманітними психологічними
              запитами.
            </p>

            <p className={s.bottomText}>
              Моя мета – сприяти вашому саморозвитку та допомогти вирішити
              проблему з якою ви звернулися. Працюючи зі мною, ви віднайдете
              свою внутрішню силу та вийдете на новий рівень самоусвідомлення. А
              також отримаєте індивідуальні підказки та відповіді на важливі
              запитання.
            </p>
          </div>

          <div className={s.pictureWrapper}>
            <Picture
              urlDesktop={images[aboutData.urlDesktop]}
              urlDesktop2x={images[aboutData.urlDesktop2x]}
              urlTablet={images[aboutData.urlTablet]}
              urlTablet2x={images[aboutData.urlTablet2x]}
              urlMobile={images[aboutData.urlMobile]}
              urlMobile2x={images[aboutData.urlMobile2x]}
              alt={aboutData.alt}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
