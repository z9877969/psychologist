import s from './Phone.module.scss';
const Phone = () => {
  return (
    <div className={s.phoneContact}>
      <a className={s.phoneLink} href="tel:+380938093906">
        <div className={s.imageContainer}></div>
      </a>
      <a className={s.numberForDesk} href="tel:+380938093906">
        <p>+38 (093) 809-39-06</p>
      </a>
    </div>
  );
};

export default Phone;
