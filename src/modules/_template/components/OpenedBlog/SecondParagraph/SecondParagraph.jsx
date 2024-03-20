import s from './SecondParagraph.module.scss';

export const SecondParagraph = ({ articles: { content } }) => {
  return (
    <div className={s.wrapSecondParagraph}>
      <p className={s.secondContent}>{content}</p>
    </div>
  );
};

// export const SecondParagraph = () => {
//   return (
//     <div className={s.wrapSecondParagraph}>
//       <p className={s.secondContent}>
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
