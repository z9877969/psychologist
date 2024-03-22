import { sprite } from 'shared/icons';
import s from './BurgerMenu.module.scss';
const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <button className={s.burgerMenu} onClick={onClick}>
      {isOpen ? (
        <div className={s.closeIconBox}>
          <svg className={s.iconClose} width="24" height="24">
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </div>
      ) : (
        <svg width="40" height="40">
          <use xlinkHref={`${sprite}#icon-menu`}></use>
        </svg>
      )}
    </button>
  );
};
export default BurgerMenu;
