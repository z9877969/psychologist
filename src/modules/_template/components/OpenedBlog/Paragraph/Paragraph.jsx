import s from './Paragraph.module.scss';

export const Paragraph = ({ content }) => {
  return (
    <div className={s.wrapParagraph}>
      <p className={s.content}> {content}</p>
    </div>
  );
};
