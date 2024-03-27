import { Picture } from 'shared/components';
import s from './SliderCertif.module.scss';

export default function SliderCertif({ text, ...props }) {
  return (
    <div>
      <Picture {...props} />
      <p className={s.sliderText}>{text}</p>
    </div>
  );
}
