import s from './BigButton.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
