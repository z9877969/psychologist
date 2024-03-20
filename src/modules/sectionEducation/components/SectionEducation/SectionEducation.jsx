import { Container } from 'shared/components';
import SectionHeader from '../SectionHeader/SectionHeader';
import CertificatesList from '../CertificateList/CertificateList';
import Slider from '../Slider/Slider';

const SectionEducation = () => {
  return (
    <section className="s.section">
      <Container>
        <SectionHeader />
        <CertificatesList />
        <Slider />
      </Container>
    </section>
  );
};

export default SectionEducation;
