export const SliderNavButtons = ({ swiperRef }) => {
  const handlePrev = () => {
    swiperRef.current && swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current && swiperRef.current.slideNext();
  };

  return (
    <div
      className="swiper-nav-btns"
      style={{ position: 'absolute', top: '-40px', right: '0' }}
    >
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
