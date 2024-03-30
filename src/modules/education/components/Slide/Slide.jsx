import { Picture } from 'shared/components';
import s from './Slide.module.scss';

export default function Slide({ text, ...props }) {
  return (
    <div className={s.slide}>
      <div className={s.frame}>
        <Picture {...props} className={s.picture} />
      </div>
      <p className={s.sliderText}>{text}</p>
    </div>
  );
}
