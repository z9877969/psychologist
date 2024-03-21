import s from './FAQList.module.scss';
import text from '../../data/textQuestions.json';
import FAQItem from '../FAQItem/FAQItem';
import { useState } from 'react';

const FAQList = () => {
  const [indexActive, setIndex] = useState(-1);
  const toggleIndex = (id) => {
    if (indexActive === parseInt(id)) {
      setIndex(-1);
    } else setIndex(parseInt(id));
  };
  return (
    <ul className={s.list}>
      {text.map((item, i) => (
        <li key={i}>
          <FAQItem
            id={i}
            title={item.title}
            text={item.text}
            indexActive={indexActive}
            toggleIndex={toggleIndex}
          />
        </li>
      ))}
    </ul>
  );
};

export default FAQList;
