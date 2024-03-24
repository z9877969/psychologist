import Abilities from '../Abilities/Abilities';
import s from './ContentList.module.scss';

const ContentList = ({ abilities }) => {
  return (
    <div className={s.contentsWrapper}>
      <Abilities abilities={abilities.slice(0, 4)} />
      <Abilities abilities={abilities.slice(4)} />
    </div>
  );
};

export default ContentList;
