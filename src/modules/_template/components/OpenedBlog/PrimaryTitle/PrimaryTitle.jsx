import s from './PrimaryTitle.module.scss';

export const PrimaryTitle = ({ content }) => {
  return (
    <div className={s.wraperTitle}>
      <h1>{content}</h1>
    </div>
  );
};
// export const Title = () => {
//   return (
//     <div className={s.wraperTitle}>
//       <h1>
//         Ефективні психологічні методи мотивування персоналу у сучасному бізнесі
//       </h1>
//     </div>
//   );
// };
