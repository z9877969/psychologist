import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import * as images from '../../img';
import certifData from '../../data/certificates.json';
import { SwiperContainer } from 'shared/components/Swiper';
import s from './EducationSection.module.scss';
import Slide from '../Slide/Slide';

const EducationSection = () => {
  const data = certifData.map((item) => {
    return {
      ...item,
      urlMobile: images[item.urlMobile],
      urlMobile2x: images[item.urlMobile2x],
      urlTablet: images[item.urlTablet],
      urlTablet2x: images[item.urlTablet2x],
      urlDesktop: images[item.urlDesktop],
      urlDesktop2x: images[item.urlDesktop2x],
    };
  });

  return (
    <Section className={s.sectionEducation}>
      <Container>
        <h2 className={s.title}>Освіта і сертифікати</h2>
        <p className={s.text}>
          Активно продовжую професійне навчання, зокрема у напрямку
          психоконсультування. Мій підхід інтегрує елементи
          когнітивно-поведінкової терапії, основи психоаналізу та техніки
          позитивної психології
        </p>
        <SwiperContainer
          data={data}
          component={Slide}
          buttonsClass={s.buttonsClass}
        />
      </Container>
    </Section>
  );
};

export default EducationSection;
