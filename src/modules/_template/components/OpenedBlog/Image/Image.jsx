import s from './Image.module.scss';

// export const Image = ({ articles: { content } }) => {
//   return (
//     <div className={s.wrapImage}>
//       <img className={s.img} src={content} alt="Image" />
//     </div>
//   );
// };

export const Image = () => {
  return (
    <div className={s.wrapImage}>
      <img
        className={s.img}
        src="http://some.cloude.com/path/to/image.jpg"
        alt="Image"
      />
    </div>
  );
};
