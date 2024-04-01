import s from './BackgroundImage.module.scss';
import { Vector_back } from '../../image';
import { Vector_main } from '../../image';

const BackgroundImage = () => {
  return (
    <div className={s.backgroundContainer}>
      <img className={s.main} src={Vector_main} width="114" height="576" />
      <img className={s.back} src={Vector_back} width="125" height="579" />
    </div>
  );
};
export default BackgroundImage;
