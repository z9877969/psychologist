import Section from 'shared/components/Section/Section';
import { Container } from 'shared/components';
import s from './BookConsultation.module.scss';
import Content from './Content/Content';
import PictureContent from './PictureContent/PictureContent';

const BookConsultation = (props) => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.consultationContent}>
          <Content {...props} />
          <PictureContent />
        </div>
      </Container>
    </Section>
  );
};

export default BookConsultation;
