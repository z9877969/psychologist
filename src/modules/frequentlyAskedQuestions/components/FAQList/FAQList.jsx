import s from './FAQList.module.scss';
import FAQItem from '../FAQItem/FAQItem';
import { useState } from 'react';

const FAQList = ({ list }) => {
  const [indexActive, setIndex] = useState('');
  const toggleIndex = (id) => {
    if (indexActive === id) {
      setIndex('');
    } else setIndex(id);
  };

  return (
    <ul className={s.list}>
      {list.map((item, index) => (
        <li key={item.id} onClick={() => toggleIndex(item.id)}>
          <FAQItem
            id={item.id}
            title={item.title}
            text={item.text}
            index={index}
            indexActive={indexActive}
            toggleIndex={toggleIndex}
          />
        </li>
      ))}
    </ul>
  );
};

export default FAQList;
