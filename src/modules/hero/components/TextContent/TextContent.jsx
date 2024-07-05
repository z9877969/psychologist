import s from './TextContent.module.scss';

const TextContent = ({ descr }) => {
  return <p className={s.textContent}>{descr}</p>;
};

export default TextContent;
