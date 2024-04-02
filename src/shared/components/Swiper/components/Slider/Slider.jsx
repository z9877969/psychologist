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
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: slidesPerViewDesck,
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
