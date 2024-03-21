import { Container } from 'shared/components';
import SubComponent from '../SubComponent/SubComponent';
import s from './ModuleTemplate.module.scss';
import { SignUpPopUp } from '../SignUpPopUp/SignUpPopUp';

const ModuleTemplate = () => {
  return (
    <section className={s.section}>
      <Container>
        <SubComponent />
        <SignUpPopUp />
      </Container>
    </section>
  );
};

export default ModuleTemplate;
