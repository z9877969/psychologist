import s from './Phone.module.scss';
const Phone = ({ factPhone, displayingPhone }) => {
  return (
    <div className={s.phoneContact}>
      <a className={s.phoneLink} href={`tel:${factPhone}`}>
        <div className={s.imageContainer}></div>
      </a>
      <a className={s.numberForDesk} href={`tel:${factPhone}`}>
        <p>{displayingPhone}</p>
      </a>
    </div>
  );
};

export default Phone;
