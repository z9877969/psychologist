import { Container } from 'shared/components';
import s from './Consultation.module.scss';
import ConsultationInfo from '../ConsultationInfo/ConsultationInfo';
import Section from 'shared/components/Section/Section';

const Consultation = () => {
  return (
    <Section className={s.section}>
      <Container>
        <ConsultationInfo />
      </Container>
    </Section>
  );
};

export default Consultation;
