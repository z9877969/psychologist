import s from './BlogListHeader.module.scss';

const BlogListHeader = ({ header = '', text = '' }) => {
  return (
    <>
      <h2 className={s.title}>{header}</h2>
      {text && <p className={s.description}>{text}</p>}
    </>
  );
};

export default BlogListHeader;
