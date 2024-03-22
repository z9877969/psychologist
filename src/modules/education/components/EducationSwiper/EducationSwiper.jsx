// import CustomSwiper from 'shared/components/CustomSwiper/CustomSwiper';
import s from './EducationSwiper.module.scss';
// import { useRef } from 'react';
// import swiperOptions from 'shared/components/CustomSwiper/CustomSwiper';

const EducationSwiper = () => {
  //   const swiperContainerRef = useRef(null);
  //   const swiperRef = CustomSwiper(swiperContainerRef);

  //   const goToNextSlide = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.slideNext();
  //     }
  //   };

  {
    /* <div ref={swiperContainerRef} className={s.swiper__container}></div> */
  }

  return (
    <div className={s.swiper__container}>
      <div className={s.swiper__wraper}>
        <div className={s.swiper__slide}>Слайд 1</div>
        <div className={s.swiper__slide}>Слайд 2</div>
        <div className={s.swiper__slide}>Слайд 3</div>
      </div>
      <div className={s.swiper__pagination}></div>
      <div className={s.swiper__buttonNext}></div>
      <div className={s.swiper__buttonPrev}></div>
      {/* <button onClick={goToNextSlide}>Go to Slide 2</button> */}
    </div>
  );
};

export default EducationSwiper;
