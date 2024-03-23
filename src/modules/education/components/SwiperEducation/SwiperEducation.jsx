import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Picture } from 'shared/components';

export default function SwiperEducation({ images, dataCertif }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {dataCertif.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Picture
              urlDesktop={images[item.urlDesktop]}
              urlDesktop2x={images[item.urlDesktop2x]}
              urlTablet={images[item.urlTablet]}
              urlTablet2x={images[item.urlTablet2x]}
              urlMobile={images[item.urlMobile]}
              urlMobile2x={images[item.urlMobile2x]}
              alt={item.alt}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

// import s from './Swiper.module.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import BlogItem from 'modules/blogSection/components/BlogItems/BlogItem';
// import data from './blogData.json';
// import * as images from 'modules/blogSection/img';
// // Import Swiper styles
// import 'swiper/css';
// import { Container } from 'shared/components';
// import { useState, useRef } from 'react';
// import clsx from 'clsx';

// const SwiperTest = ({ children }) => {
//   const [swiperInde, setSwiperInde] = useState(0);
//   const swiperRef = useRef(null);

//   const handleSlideChange = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       setSwiperInde(swiperRef.current.swiper.activeIndex);
//     }
//   };

//   const goToNextSlide = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goToPrevSlide = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const hasPrevSlides = swiperInde > 0;
//   let imgWidth = 1;
//   if (document.body.clientWidth > 767)
//     imgWidth = document.body.clientWidth > 1439 ? 3 : 2;
//   const hasNextSlides = swiperInde < data.length - imgWidth;
//   console.log(swiperInde);
//   console.log(hasPrevSlides, hasNextSlides);
//   return (
//     <Container>
//       <Swiper
//         ref={swiperRef}
//         navigation
//         spaceBetween={50}
//         slidesPerView={3}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1440: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//         }}
//         onSlideChange={handleSlideChange}
//       >
//         {data.map((blog) => (
//           <SwiperSlide key={blog.id}>
//             <BlogItem blog={blog} images={images} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <button
//         onClick={goToPrevSlide}
//         // disabled={!hasPrevSlides}
//         className={clsx(s.button, !hasPrevSlides && s.red)}
//         type="button"
//       >
//         left
//       </button>
//       <button
//         onClick={goToNextSlide}
//         disabled={!hasNextSlides}
//         className={clsx(s.button, !hasNextSlides && s.red)}
//         type="button"
//       >
//         right
//       </button>
//     </Container>
//   );
// };

// export default SwiperTest;
