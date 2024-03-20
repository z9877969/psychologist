import s from './SubComponent.module.scss';
import { abductors } from '../../images';
import { SignUpPopUp } from '../PopUp/SignUpPopUp';

const SubComponent = () => {
  return (
    <>
      <h2 className={s.title}>SubComponent</h2>
      <img src={abductors} alt="some image description" />
      <SignUpPopUp />
    </>
  );
};

export default SubComponent;
