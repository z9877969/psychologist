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
  const itemsOnPage = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  })
    ? 1
    : 2;
  const numberOfBullet = isMobile ? data.length : data.length - itemsOnPage;

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
