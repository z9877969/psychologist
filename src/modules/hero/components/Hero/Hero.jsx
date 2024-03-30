import { Container } from 'shared/components';
import MainPicture from '../MainPicture/MainPicture';
import Tittle from '../Tittle/Tittle';
import TextContent from '../TextContent/TextContent';
import ButtonBig from '../ButtonBig/ButtonBig';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import s from './Hero.module.scss';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.heroWrap}>
          <MainPicture />
          <div className={s.heroInfo}>
            <Tittle />
            <TextContent />
            <div className={s.buttonBox}>
              <ButtonBig />
              <ButtonSmall />
            </div>
          </div>
        </div>
        <BackgroundImage />
      </Container>
    </section>
  );
};
export default Hero;
