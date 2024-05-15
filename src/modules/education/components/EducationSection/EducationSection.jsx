import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import { SwiperContainer } from 'shared/components/Swiper';
import s from './EducationSection.module.scss';
import Slide from '../Slide/Slide';
import { SectionDescription } from 'shared/components';

const EducationSection = ({ list, title, descr }) => {
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
        <h2 className={s.title}>{title}</h2>
        <SectionDescription descr={descr} />
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
