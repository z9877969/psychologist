import { Container } from 'shared/components';
import SubComponent from '../SubComponent/SubComponent';
import s from './ModuleTemplate.module.scss';

const ModuleTemplate = () => {
  return (
    <section className={s.section}>
      <Container>
        <SubComponent />
      </Container>
    </section>
  );
};

export default ModuleTemplate;
