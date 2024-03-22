import s from './BlogList.module.scss';

const BlogList = ({ className = '', children }) => {
  return <ul className={`${s.list} ${className}`}>{children}</ul>;
};

export default BlogList;
