import s from './BigButtom.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
