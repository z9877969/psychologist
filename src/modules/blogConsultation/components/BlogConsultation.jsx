import Section from 'shared/components/Section/Section';
import s from './BlogConsultation.module.scss';
import { Container } from 'shared/components';
import ConsultationContent from './ConsultationContent/ConsultationContent';

const BlogConsultation = () => {
  return (
    <Section className={s.section}>
      <Container>
        <ConsultationContent />
      </Container>
    </Section>
  );
};

export default BlogConsultation;
