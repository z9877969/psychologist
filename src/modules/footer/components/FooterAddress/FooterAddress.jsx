import s from './FooterAddress.module.scss';

const FooterAddress = () => {
  return (
    <address className={s.address}>
      <a href="tel:+380653456789">+380 65 345 67 89</a>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </address>
  );
};

export default FooterAddress;
