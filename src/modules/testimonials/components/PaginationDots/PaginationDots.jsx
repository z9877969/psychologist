import s from './PaginationDots.module.scss';

const PaginationDots = ({ currentPage, paginationDots, changePage }) => {
  return (
    <div className={s.pagination}>
      {Array.from({ length: paginationDots }, (_, index) => (
        <button
          key={index}
          className={`${s.dot} ${index === currentPage ? s.active : ''}`}
          onClick={() => changePage(index)}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
