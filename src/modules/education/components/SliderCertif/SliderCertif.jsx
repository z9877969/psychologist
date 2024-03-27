import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import { useEffect, useRef } from 'react';
import PictureCertif from '../SlideCertif/SliderCertif';
import { Navigation, Pagination } from 'swiper/modules';
// import s from './SliderCertif.module.scss';

export default function SliderCertif({ images, dataCertif, swiperRef }) {
  const swiperInstance = useRef(null);

  useEffect(() => {
    swiperInstance.current = swiperRef.current.swiper;
  }, [swiperRef]);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      keyboard={{
        enabled: true,
      }}
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
      {dataCertif.map((item) => (
        <SwiperSlide key={item.id}>
          <PictureCertif images={images} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
