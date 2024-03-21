import { useEffect, useState } from 'react';
import s from './FAQItem.module.scss';
import { sprite } from 'shared/icons';
sprite;
const FAQItem = ({ text, title, id, toggleIndex, indexActive }) => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (indexActive === id) {
      setActive(true);
      return;
    } else setActive(false);
  }, [indexActive, id]);
  const dinamicItem = isActive ? [s.item, s.activeItem].join(' ') : s.item;
  const dinamicBtn = isActive ? [s.btn, s.activeBtn].join(' ') : s.btn;
  const dinamikTitle = isActive ? s.activeTitle : s.title;
  return (
    <div className={dinamicItem}>
      <div className={s.titleContainer}>
        <h3 className={dinamikTitle}>{title}</h3>
        <button className={dinamicBtn} onClick={() => toggleIndex(id)}>
          <svg width={24} height={24} style={{ stroke: '#000' }}>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
      {isActive && <p className={s.text}>{text}</p>}
    </div>
  );
};

export default FAQItem;
