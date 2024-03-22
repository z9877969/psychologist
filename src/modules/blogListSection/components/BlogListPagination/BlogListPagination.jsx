import s from './BlogListPagination.module.scss';

const BlogListPagination = ({ page, totalPages, onChange }) => {
  return (
    <ul className={s.list}>
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i}>
          <button
            className={`${s.button} ${page === i + 1 ? s.current : ''}`}
            onClick={() => onChange(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BlogListPagination;
