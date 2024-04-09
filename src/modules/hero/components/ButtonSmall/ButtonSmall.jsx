import s from './ButtonSmall.module.scss';
import scrollToSection from 'modules/header.3/helpers';

const ButtonSmall = () => {
  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  return (
    <button className={s.link} onClick={() => handleMenuItemClick('services')}>
      Послуги
    </button>
  );
};

export default ButtonSmall;
