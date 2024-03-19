import s from './ParagraphAboutMe.module.scss';

// export const ParagraphAboutMe = ({ articles: { content } }) => {
//   return (
//     <div className={s.wrapParagraphAboutMe}>
//       <p className={s.contentAboutMe}> {content}</p>
//     </div>
//   );
// };

export const ParagraphAboutMe = () => {
  return (
    <div className={s.wrapParagraphAboutMe}>
      <p className={s.contentAboutMe}>
        У сучасному динамічному світі економіки, розвиток підприємств у різних
        галузях значною мірою залежить від здатності керівництва зацікавити
        персонал у досягненні корпоративних цілей. Мотивація персоналу стає
        ключовим фактором успіху будь-якої організації. Різноманітність
        спеціалізацій та ролей у сучасних компаніях вимагає індивідуального
        підходу до мотивації кожного працівника.
      </p>
    </div>
  );
};
