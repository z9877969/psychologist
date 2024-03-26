import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import * as images from '../../img';
import certifData from '../../data/certificates.json';
import { SwiperContainer } from 'shared/components/Swiper';
import { Picture } from 'shared/components';

const EducationSection = () => {
  const data = certifData.map((item) => {
    return {
      ...item,
      ulrMobile: images[item.ulrMobile],
      urlMobile2x: images[item.urlMobile2x],
      urlTablet: images[item.urlTablet],
      urlTablet2x: images[item.urlTablet2x],
      urlDesktop: images[item.urlDesktop],
      urlDesktop2x: images[item.urlDesktop2x],
    };
  });
  return (
    <Section>
      <Container>
        <h1>Освіта</h1>
        <p>lorem</p>
        <SwiperContainer data={data} component={Picture} />
      </Container>
    </Section>
  );
};

export default EducationSection;
