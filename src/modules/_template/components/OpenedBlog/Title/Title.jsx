import s from '../OpenedBlog/Title.module.scss';

export const Title = ({ content }) => {
  return (
    <div className={s.wraperTitle}>
      <h1>{content}</h1>
    </div>
  );
};
// export const Title = () => {
//   return (
//     <h1>
//       Ефективні психологічні методи мотивування персоналу у сучасному бізнесі
//     </h1>
//   );
// };
