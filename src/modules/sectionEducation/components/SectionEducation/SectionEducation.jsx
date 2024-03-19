import { Container } from 'shared/components';
import CertificatesList from '../CertificateList/CertificateList';
import SectionHeader from '../SectionHeader/SectionHeader';
import Slider from '../Slider/Slider';

import s from './ModuleTemplate.module.scss';

const SectionEducation = () => {
  return (
    <section className={s.section}>
      <Container>
        <SectionHeader />
        <CertificatesList />
        <Slider />
      </Container>
    </section>
  );
};

export default SectionEducation;
