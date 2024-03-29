import { useRef } from 'react';
import { SliderNavButtons } from '../SliderNavButtons/SliderNavButtons';
import Slider from '../Slider/Slider';
import s from './SwiperContainer.module.scss';
import clsx from 'clsx';
import SliderPagination from '../SliderPagination/SliderPagination';
import { useMediaQuery } from 'react-responsive';

export default function SwiperContainer({
  data,
  component: Component,
  containerClass = '',
  buttonsClass = '',
  paginationClass = '',
  isPagination = false,
}) {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const showButton = isPagination && isMobile;
  return (
    <div className={clsx(s.wrapper, containerClass)}>
      {!showButton && (
        <SliderNavButtons
          swiperRef={swiperRef}
          className={buttonsClass}
          data={data}
        />
      )}
      <Slider
        data={data}
        component={(props) => <Component {...props} />}
        swiperRef={swiperRef}
        isPagination={isPagination}
      />
      {isPagination && (
        <SliderPagination
          data={data}
          swiperRef={swiperRef}
          classname={paginationClass}
        />
      )}
    </div>
  );
}
