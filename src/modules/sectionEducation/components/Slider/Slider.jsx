import s from './SliderControls.module.scss';

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
