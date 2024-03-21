import s from './Phone.module.scss';
const Phone = () => {
  return (
    <div className={s.phoneContact}>
      <a className={s.phoneLink} href="tel:+380 65 345 67 89">
        <div className={s.imageContainer}></div>
      </a>
      <a className={s.numberForDesk} href="tel:+380 65 345 67 89">
        <p>+380 65 345 67 89</p>
      </a>
    </div>
  );
};

export default Phone;
