import s from './NavigationButtons.module.scss';

const NavigationButtons = ({
  currentPage,
  maxPage,
  paginationDots,
  changePage,
  sprite,
}) => {
  const disablePrev = currentPage === 0;
  const disableNext = currentPage >= Math.min(maxPage, paginationDots - 1);

  const renderIcon = (id) => {
    return (
      <svg className={s.icon}>
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    );
  };

  return (
    <div className={s.navbtn}>
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={disablePrev}
        className={`${s.iconButton} ${disablePrev ? s.disabled : ''}`}
        aria-label="Перейти на попередню сторінку"
      >
        {renderIcon('icon-arrows-left')}
      </button>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={disableNext}
        className={`${s.iconButton} ${disableNext ? s.disabled : ''}`}
        aria-label="Перейти на наступну сторінку"
      >
        {renderIcon('icon-arrows-right')}
      </button>
    </div>
  );
};

export default NavigationButtons;
