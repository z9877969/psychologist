import { SliderNavButtons } from '../SliderNavButtons/SliderNavButtons';
import s from './SliderBar.module.scss';

export default function SliderBar({ swiperRef }) {
  return (
    <div className={s.slideBar__wrapper}>
      <h2>Освіта</h2>
      <SliderNavButtons swiperRef={swiperRef} />
    </div>
  );
}
