import { useEffect, useState } from 'react';
import s from './ScrollUpButton.module.scss';
import { sprite } from 'shared/icons';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

const ScrollUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isBigDesktop = useMediaQuery({ query: '(min-width: 1590px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  let startPosition = 680;
  if (isTablet) startPosition = 1016;
  if (isDesktop) startPosition = 736;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    function handleScroll() {
      scrollY > startPosition ? setIsOpen(true) : setIsOpen(false);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startPosition]);

  const getPosition = () => {
    if (!isBigDesktop) return {};
    const width = document.body.clientWidth;
    const transform = (width - 1440) / 4 + 1412;
    return {
      transform: `translate(${transform}px, 0px)`,
    };
  };

  return (
    <div className={s.wrapper}>
      <button
        className={clsx(s.button, isOpen && s.isOpen)}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
        style={getPosition()}
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
