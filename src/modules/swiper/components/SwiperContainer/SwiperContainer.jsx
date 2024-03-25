import { useRef } from 'react';
import { SliderNavButtons } from '../SliderNavButtons/SliderNavButtons';
import Slider from '../Slider/Slider';

export default function SwiperContainer({
  data,
  component: Component,
  // containerClassName,
  // buttonsClassName,
}) {
  const swiperRef = useRef(null);

  return (
    <div className={'wrapper'} style={{ position: 'relative' }}>
      <SliderNavButtons swiperRef={swiperRef} className="buttonsClassName" />
      <Slider
        data={data}
        component={(props) => <Component {...props} />}
        swiperRef={swiperRef}
      />
    </div>
  );
}
