import s from './Ability.module.scss';
const Ability = ({ id, text }) => {
  return (
    <li className={s.ability}>
      <span className={s.abylityId}>{id}.</span>
      <span className={s.abilityText}>{text}</span>
    </li>
  );
};
export default Ability;
