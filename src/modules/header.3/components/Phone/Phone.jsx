import s from './Phone.module.scss';
const Phone = () => {
  return (
    <div className={s.phoneContact}>
      <a className={s.phoneLink} href="tel:+380653456789">
        <div className={s.imageContainer}></div>
      </a>
      <a className={s.numberForDesk} href="tel:+380653456789">
        <p>+38 (065) 345-67-89</p>
      </a>
    </div>
  );
};

export default Phone;
