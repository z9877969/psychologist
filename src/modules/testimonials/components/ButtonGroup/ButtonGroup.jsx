import s from './ButtonGroup.module.scss';

const ButtonGroup = () => {
  return (
    <div className={s.btnGroup}>
      <button className={s.btn}>Переглянути всі відгуки</button>
      <button className={s.btn}>Залишити відгук</button>
    </div>
  );
};

export default ButtonGroup;
