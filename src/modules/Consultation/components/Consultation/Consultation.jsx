import { Container, PictureContent } from 'shared/components';
import s from './Consultation.module.scss';
import Section from 'shared/components/Section/Section';
import Content from '../Content/Content';

const Consultation = ({ list, title, descr }) => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.consultationInfo}>
          <PictureContent />
          <Content list={list} title={title} descr={descr} />
        </div>
      </Container>
    </Section>
  );
};

export default Consultation;
