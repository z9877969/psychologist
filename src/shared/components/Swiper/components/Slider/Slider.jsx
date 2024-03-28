import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import { useEffect, useRef } from 'react';

export default function Slider({ data, component: Component, swiperRef }) {
  const swiperInstance = useRef(null);

  useEffect(() => {
    swiperInstance.current = swiperRef.current.swiper;
  }, [swiperRef]);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Component {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
