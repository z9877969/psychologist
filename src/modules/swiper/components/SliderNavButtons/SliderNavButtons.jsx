import { sprite } from 'shared/icons';
import s from './SliderNavButtons.module.scss';
import clsx from 'clsx';

export const SliderNavButtons = ({ swiperRef }) => {
  const hasPrevSlide = true;
  const hasNextSlides = true;

  const renderIcon = (iconId, isActive) => {
    return (
      <svg
        className={clsx(s.svg, !isActive && s.buttonDisab)}
        width="48"
        height="48"
      >
        <use href={`${sprite}#${iconId}`}></use>
      </svg>
    );
  };

  const handleSlide = (direction) => {
    if (swiperRef.current) {
      direction === 'prev'
        ? swiperRef.current.slidePrev()
        : swiperRef.current.slideNext();
    }
  };

  return (
    <div className={s.swiper_nav_btns}>
      <button onClick={() => handleSlide('prev')} className={s.button_arrow}>
        {renderIcon('icon-arrows-left', hasPrevSlide)}
      </button>
      <button onClick={() => handleSlide('next')} className={s.button_arrow}>
        {renderIcon('icon-arrows-right', hasNextSlides)}
      </button>
    </div>
  );
};
