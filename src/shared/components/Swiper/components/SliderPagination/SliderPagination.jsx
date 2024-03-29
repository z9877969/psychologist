import clsx from 'clsx';
import s from './SliderPagination.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const SliderPagination = ({ data, swiperRef, classname }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('slideChange', () => {
        setSwiperIndex(swiper.activeIndex);
      });
    }
  }, [swiperRef]);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  let numberOfBullet = isMobile ? data.length : data.length - 1;
  if (numberOfBullet < 0) numberOfBullet = 0;
  const onChange = (index) => swiperRef.current?.slideTo(index);
  return (
    <div className={clsx(s.container, classname)}>
      {[...Array(numberOfBullet)].map((_, index) => (
        <span
          className={clsx(s.bullet, index === swiperIndex && s.isActive)}
          key={index}
          onClick={() => onChange(index)}
        ></span>
      ))}
    </div>
  );
};
export default SliderPagination;
