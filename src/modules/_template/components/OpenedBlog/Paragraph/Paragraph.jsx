import s from './Paragraph.module.scss';

export const Paragraph = ({ content }) => {
  return (
    <div className={s.wrapFirstParagraph}>
      <p className={s.firstContent}> {content}</p>
    </div>
  );
};

// export const FirstParagraph = () => {
//   return (
//     <div className={s.wrapFirstParagraph}>
//       <p className={s.firstContent}>
//         У сучасному динамічному світі економіки, розвиток підприємств у різних
//         галузях значною мірою залежить від здатності керівництва зацікавити
//         персонал у досягненні корпоративних цілей. Мотивація персоналу стає
//         ключовим фактором успіху будь-якої організації. Різноманітність
//         спеціалізацій та ролей у сучасних компаніях вимагає індивідуального
//         підходу до мотивації кожного працівника.
//       </p>
//     </div>
//   );
// };
