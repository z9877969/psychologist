import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';

export default function Slider({
  data,
  component: Component,
  swiperRef,
  isPagination,
}) {
  const slidesPerViewDesck = isPagination ? 2 : 3;
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
          slidesPerView: slidesPerViewDesck,
          spaceBetween: 20,
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
