import s from './Slider.module.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const Slider = () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

const Slider = ({ onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className={s.controls}>
      <button onClick={onPrev} disabled={isPrevDisabled} className={s.button}>
        left
      </button>
      <button onClick={onNext} disabled={isNextDisabled} className={s.button}>
        right
      </button>
    </div>
  );
};

export default Slider;
