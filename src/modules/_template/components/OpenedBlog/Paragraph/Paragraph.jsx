import s from './Paragraph.module.scss';

export const Paragraph = ({ content }) => {
  return (
    <div className={s.wrapFirstParagraph}>
      <p className={s.firstContent}> {content}</p>
    </div>
  );
};
