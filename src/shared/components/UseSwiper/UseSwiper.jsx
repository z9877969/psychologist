import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export default function UseSwiper() {
  const swiperOptions = {
    slidesPerView: 1,
    modules: [Navigation],
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const initializeSwiper = () => new Swiper('.swiper-container', swiperOptions);

  return initializeSwiper();
}
