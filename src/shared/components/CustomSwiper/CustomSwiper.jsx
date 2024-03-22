// import { useEffect, useRef } from 'react';
import { useRef } from 'react';
import Swiper from 'swiper';

export default function CustomSwiper(elementRef) {
  const swiperRef = useRef(null);

  const options = {
    slidesPerView: 1,
  };

  swiperRef.current = new Swiper(elementRef, options);
}
