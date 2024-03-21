import Section from 'shared/components/Section/Section';
import s from './BookConsultation.module.scss';
import { Container } from 'shared/components';
import ConsultationContent from './ConsultationContent/ConsultationContent';

const BookConsultation = () => {
  return (
    <Section className={s.section}>
      <Container>
        <ConsultationContent />
      </Container>
    </Section>
  );
};

export default BookConsultation;
