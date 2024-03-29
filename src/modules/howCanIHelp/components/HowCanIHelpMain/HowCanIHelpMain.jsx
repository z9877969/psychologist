import { useEffect, useState } from 'react';
import { Container, Section } from 'shared/components';
import { servicesAPI } from 'shared/helpers/servicesAPI';
import { SwiperContainer } from 'shared/components/Swiper';
import HowCanIHelpItem from '../HowCanIHelpItem/HowCanIHelpItem';
import * as images from '../../images';
import s from './HowCanIHelpMain.module.scss';
import HowCanIHelpBack from '../HowCanIHelpBack/HowCanIHelpBack';

const HowCanIHelpMain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        const result = await servicesAPI.fetchServices();

        setData(
          result.map((item) => {
            return {
              ...item,
              urlMobile: images[item.urlMobile],
              urlMobile2x: images[item.urlMobile2x],
              urlTablet: images[item.urlTablet],
              urlTablet2x: images[item.urlTablet2x],
              urlDesktop: images[item.urlDesktop],
              urlDesktop2x: images[item.urlDesktop2x],
            };
          })
        );
      } catch (err) {
        alert(err);
      }
    }

    getArticles();
  }, []);

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
          data={data}
          component={HowCanIHelpItem}
          buttonsClass={s.sliderNavBar}
        />
      </Container>
      <HowCanIHelpBack />
    </Section>
  );
};

export default HowCanIHelpMain;
