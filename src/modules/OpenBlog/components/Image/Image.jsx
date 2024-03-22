import s from './Image.module.scss';

export const Image = ({ content }) => {
  return (
    <div className={s.wrapImage}>
      <img className={s.img} src={content} alt="Image" />
    </div>
  );
};
