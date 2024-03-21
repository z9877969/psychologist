import s from './FAQList.module.scss';
import text from '../../data/textQuestions.json';
import FAQItem from '../FAQItem/FAQItem';

const FAQList = () => {
  return (
    <ul className={s.list}>
      {text.map((item, i) => (
        <li key={i}>
          <FAQItem title={item.title} text={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default FAQList;
