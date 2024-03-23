import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import SwiperEducation from '../SwiperEducation/SwiperEducation';
import * as images from '../../img';
import certifData from '../../data/certificates.json';

const Education = () => {
  return (
    <Section>
      <Container>
        <h1>Освіта</h1>
        <SwiperEducation dataCertif={certifData} images={images} />
      </Container>
    </Section>
  );
};

export default Education;
