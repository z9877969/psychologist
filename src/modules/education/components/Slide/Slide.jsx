import { Picture } from 'shared/components';
import s from './Slide.module.scss';

export default function Slide({ text, ...props }) {
  return (
    <div className={s.slide}>
      <Picture {...props} className={s.picture} />
      <p className={s.sliderText}>{text}</p>
    </div>
  );
}
