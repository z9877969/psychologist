import { sprite } from 'shared/icons';
import s from './SliderNavButtons.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const SliderNavButtons = ({ swiperRef, className, data }) => {
  const [hasPrevSlide, setHasPrevSlide] = useState(false);
  const [hasNextSlide, setHasNextSlide] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('slideChange', () => {
        setHasPrevSlide(!swiper.isBeginning);
        setHasNextSlide(!swiper.isEnd);
      });

      setHasPrevSlide(!swiper.isBeginning);
      setHasNextSlide(!swiper.isEnd);
    }
  }, [swiperRef, data]);

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
    <div className={clsx(s.swiper_nav_btns, className)}>
      <button
        onClick={() => handleSlide('prev')}
        className={clsx(s.button_arrow, !hasPrevSlide && s.button_disabled)}
        disabled={!hasPrevSlide}
      >
        {renderIcon('icon-arrows-left', hasPrevSlide)}
      </button>
      <button
        onClick={() => handleSlide('next')}
        className={clsx(s.button_arrow, !hasNextSlide && s.button_disabled)}
        disabled={!hasNextSlide}
      >
        {renderIcon('icon-arrows-right', hasNextSlide)}
      </button>
    </div>
  );
};
