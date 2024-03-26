import { sprite } from 'shared/icons';
import s from './SliderNavButtons.module.scss';
import clsx from 'clsx';

export const SliderNavButtons = ({ swiperRef }) => {
  const hasPrevSlide = true;
  const hasNextSlides = true;

  const renderIcon = (id, isActive) => {
    return (
      <svg
        className={clsx(s.svg, !isActive && s.buttonDisab)}
        width="48"
        height="48"
      >
        <use href={`${sprite}#${id}`}></use>
      </svg>
    );
  };

  const handlePrev = () => {
    swiperRef.current && swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current && swiperRef.current.slideNext();
  };

  return (
    <div className={s.swiper_nav_btns}>
      <button onClick={handlePrev} className={s.button_arrow}>
        {renderIcon('icon-arrows-left', hasPrevSlide)}
      </button>
      <button onClick={handleNext} className={s.button_arrow}>
        {renderIcon('icon-arrows-right', hasNextSlides)}
      </button>
    </div>
  );
};
