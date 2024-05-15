import { Container, Section, SectionDescription } from 'shared/components';
import { SwiperContainer } from 'shared/components/Swiper';
import HowCanIHelpItem from '../HowCanIHelpItem/HowCanIHelpItem';
import s from './HowCanIHelpMain.module.scss';
import HowCanIHelpBack from '../HowCanIHelpBack/HowCanIHelpBack';
import { pasteAccentPhrase } from 'shared/helpers';

const HowCanIHelpMain = ({ list, title, accent, descr }) => {
  const accentedTitle = pasteAccentPhrase(title, accent).map(
    ({ value, type }, i) =>
      type === 'accent' ? (
        <span key={i} className={s.titleAccent}>
          {value}
        </span>
      ) : (
        value
      )
  );
  return (
    <Section className={s.section} id="services">
      <Container>
        <h2 className={s.title}>{accentedTitle}</h2>
        <SectionDescription descr={descr} />
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
