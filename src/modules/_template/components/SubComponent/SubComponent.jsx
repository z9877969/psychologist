import s from './SubComponent.module.scss';
import { abductors } from '../../images';

const SubComponent = () => {
  return (
    <>
      <h2 className={s.title}>SubComponent</h2>
      <img src={abductors} alt="some image description" />
    </>
  );
};

export default SubComponent;
