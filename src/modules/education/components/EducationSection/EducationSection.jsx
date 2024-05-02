import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import { SwiperContainer } from 'shared/components/Swiper';
import s from './EducationSection.module.scss';
import Slide from '../Slide/Slide';

const EducationSection = ({ list }) => {
  const data = list.map(({ imageUrl, descr, ...rest }) => {
    return {
      imageUrl,
      text: descr,
      ...rest,
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
