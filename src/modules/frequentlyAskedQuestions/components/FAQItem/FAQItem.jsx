import { useState } from 'react';
import s from './FAQItem.module.scss';
//import icon from '../../../../shared/icons/sprite.svg';
const FAQItem = ({ text, title }) => {
  const [isActive, setActive] = useState(false);
  const dinamicItem = isActive ? [s.item, s.activeItem].join(' ') : s.item;
  const dinamicBtn = isActive ? [s.btn, s.activeBtn].join(' ') : s.btn;
  const dinamikTitle = isActive ? s.activeTitle : s.title;
  return (
    <div className={dinamicItem}>
      <div className={s.titleContainer}>
        <h3 className={dinamikTitle}>{title}</h3>
        <button className={dinamicBtn} onClick={() => setActive(!isActive)}>
          +
        </button>
      </div>
      {isActive && <p className={s.text}>{text}</p>}
    </div>
  );
};

export default FAQItem;
