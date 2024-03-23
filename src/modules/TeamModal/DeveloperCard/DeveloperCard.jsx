import { Link } from 'react-router-dom';
import s from './DeveloperCard.module.scss';
import { sprite } from 'shared/icons';

const DeveloperCard = ({ developer }) => {
  const { name, position, photo, linkedin } = developer;

  return (
    <div className={s.card}>
      <Link to={linkedin} target="_blank" className={s.link}>
        <div className={s.container}>
          <img className={s.photo} src={photo} alt={name} />
          <svg className={s.icon}>
            <use xlinkHref={`${sprite}#icon-arrows-right`}></use>
          </svg>
        </div>

        <div className={s.details}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.position}>{position}</p>
        </div>
      </Link>
    </div>
  );
};

export default DeveloperCard;
