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
      spaceBetween={50}
      slidesPerView={2}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} style={{ width: '100%' }}>
          <Component {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
