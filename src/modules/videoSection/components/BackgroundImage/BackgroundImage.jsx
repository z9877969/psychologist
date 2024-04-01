import s from './BackgroundImage.module.scss';
import { vector_main } from 'modules/videoSection/img';
import { vector_line } from 'modules/videoSection/img';

const BackgroundImage = () => {
  return (
    <div className={s.imageWrapper}>
      <img className={s.main} src={vector_main} />
      <img className={s.line} src={vector_line} />
    </div>
  );
};

export default BackgroundImage;
