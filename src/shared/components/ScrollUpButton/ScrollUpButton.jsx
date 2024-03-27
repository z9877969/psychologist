import { useEffect, useState } from 'react';
import s from './ScrollUpButton.module.scss';
import { sprite } from 'shared/icons';
import clsx from 'clsx';

const ScrollUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = document.body.clientWidth;
  let startPosition = 1119;
  if (width > 767) startPosition = width > 1439 ? 1640 : 1716;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    function handleScroll() {
      scrollY > startPosition ? setIsOpen(true) : setIsOpen(false);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startPosition]);

  return (
    <div className={s.wrapper}>
      <button
        className={clsx(s.button, isOpen && s.isOpen)}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
      >
        <svg className={s.svg} width="24" height="24">
          <use xlinkHref={`${sprite}#icon-scroll-arrow`}></use>
        </svg>
        <svg className={clsx(s.svgSecond)} width="24" height="24">
          <use xlinkHref={`${sprite}#icon-scroll-up-second`}></use>
        </svg>
      </button>
    </div>
  );
};
export default ScrollUpButton;
