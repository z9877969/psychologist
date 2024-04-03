import { useEffect, useRef, useState } from 'react';
import s from './FAQItem.module.scss';
import { sprite } from 'shared/icons';
import clsx from 'clsx';

const FAQItem = ({ text, title, id, indexActive }) => {
  const [isActive, setActive] = useState(false);
  const itemRef = useRef();
  useEffect(() => {
    if (indexActive === id) {
      setActive(true);

      setTimeout(() => {
        itemRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 200);

      return;
    } else setActive(false);
  }, [indexActive, id]);
  const dinamicItem = clsx(s.item, isActive && s.activeItem);
  const dinamicBtn = clsx(s.btn, isActive && s.activeBtn);
  const dinamikTitle = clsx(s.title, isActive && s.activeTitle);

  return (
    <div className={dinamicItem} ref={itemRef}>
      <div className={s.titleContainer}>
        <h3 className={dinamikTitle}>{title}</h3>
        <button className={dinamicBtn}>
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
