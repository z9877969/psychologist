import { Container, Section } from 'shared/components';
import { SwiperContainer } from 'shared/components/Swiper';
import HowCanIHelpItem from '../HowCanIHelpItem/HowCanIHelpItem';
import s from './HowCanIHelpMain.module.scss';
import HowCanIHelpBack from '../HowCanIHelpBack/HowCanIHelpBack';

const HowCanIHelpMain = ({ list }) => {
  return (
    <Section className={s.section} id="services">
      <Container>
        <h2 className={s.title}>
          Як я можу <span className={s.titleAccent}>допомогти</span>
        </h2>
        <p className={s.text}>
          Якщо ви шукаєте професійну підтримку у розумінні та вирішенні
          особистих, сімейних або професійних питань, то дізнайтеся більше
          інформації, де я зможу вам допомогти. Записуйтеся на консультацію, щоб
          разом визначити найкращий шлях до вашого саморозвитку та благополуччя
        </p>
        <SwiperContainer
          data={list}
          component={HowCanIHelpItem}
          buttonsClass={s.sliderNavBar}
        />
      </Container>
      <HowCanIHelpBack />
    </Section>
  );
};

export default HowCanIHelpMain;
