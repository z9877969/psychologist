import s from './Paragraph.module.scss';

export const Paragraph = ({ content }) => {
  return <p className={s.content}> {content}</p>;
};
