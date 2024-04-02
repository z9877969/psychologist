import s from './BlogListPagination.module.scss';
import ReactPaginate from 'react-paginate';
import { sprite } from '../../../../shared/icons/index';
import clsx from 'clsx';

const PREV_ICON = (
  <svg width={24} height={24}>
    <use href={`${sprite}#icon-paginator-chevron-left`} />
  </svg>
);

const NEXT_ICON = (
  <svg width={24} height={24}>
    <use href={`${sprite}#icon-paginator-chevron-right`} />
  </svg>
);

const BlogListPagination = ({ page, totalPages, onChange, media }) => {
  if (totalPages <= 1) return <></>;

  let marginPages, pageRange;
  const maxPages = media.isDesktop ? 7 : 5;

  if (maxPages >= totalPages) {
    marginPages = maxPages;
    pageRange = 1;
  } else {
    marginPages = 1;

    switch (page) {
      case 1:
        pageRange = media.isDesktop ? 5 : 3;
        break;
      case 2:
        pageRange = media.isDesktop ? 4 : 2;
        break;
      case 3:
        pageRange = media.isDesktop ? 4 : 1;
        break;
      case totalPages - 2:
        pageRange = media.isDesktop ? 4 : 1;
        break;
      case totalPages - 1:
        pageRange = media.isDesktop ? 5 : 2;
        break;
      case totalPages:
        pageRange = media.isDesktop ? 5 : 3;
        break;
      default:
        pageRange = media.isDesktop ? 2 : 1;
    }
  }

  function handlePageChange(e) {
    onChange(e.selected + 1);
  }

  return (
    <>
      <ReactPaginate
        onPageChange={handlePageChange}
        // initialPage={page - 1}
        forcePage={Math.max(0, page - 1)}
        pageRangeDisplayed={pageRange}
        marginPagesDisplayed={marginPages}
        pageCount={totalPages}
        pageClassName={s.listItem}
        pageLinkClassName={s.pageLink}
        previousLabel={PREV_ICON}
        previousClassName={s.arrowItemPrev}
        previousLinkClassName={clsx(
          s.arrowLink,
          page === 1 && s.arrowLinkDisabled
        )}
        nextLabel={NEXT_ICON}
        nextClassName={s.arrowItemNext}
        nextLinkClassName={clsx(
          s.arrowLink,
          page === totalPages && s.arrowLinkDisabled
        )}
        breakLabel="..."
        breakClassName={s.listItem}
        breakLinkClassName={s.pageLink}
        containerClassName={s.list}
        activeClassName={s.current}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default BlogListPagination;
