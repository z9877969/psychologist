import s from './Quote.module.scss';

// export const Quote = ({ articles: { content, accent, author } }) => {
//   return (
//     <div className={s.wraperQuote}>
//       <div className={s.wrapContent}>
//         <p className={s.textEl}>“</p>
//         <p className={s.content}>
//           <span className={s.accent}>{accent}</span>
//           {content}
//         </p>
//         <p className={s.textEl}>“</p>
//       </div>
//       <div className={s.wrapAuthor}>
//         <p className={s.author}>{author}</p>
//       </div>
//     </div>
//   );
// };

export const Quote = () => {
  return (
    <div className={s.wraperQuote}>
      <div className={s.wrapContent}>
        <p className={s.textEl}>“</p>
        <p className={s.content}>
          <span className={s.accent}>Людські потреби</span> можуть бути
          розподілені на п'ять рівнів: фізіологічні потреби, потреби в безпеці,
          потреби в прив'язаності, потреби в повазі та потреби в самореалізації.
        </p>
        <p className={s.textEl}>“</p>
      </div>
      <div className={s.wrapAuthor}>
        <p className={s.author}>А. Маслоу</p>
      </div>
    </div>
  );
};
