import s from './Tittle.module.scss';

const Tittle = ({ title }) => {
  return <h1 className={s.tittle}>{title}</h1>;
};

export default Tittle;
