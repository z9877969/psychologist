import { Link } from 'react-router-dom';
import s from './DeveloperCard.module.scss';
import { sprite } from 'shared/icons';
import * as images from '../img';

const DeveloperCard = ({ developer }) => {
  const { name, position, img1x, img2x, linkedin } = developer;

  return (
    <div className={s.card}>
      <Link to={linkedin} target="_blank" className={s.link}>
        <div className={s.container}>
          <img
            className={s.photo}
            src={images[img1x]}
            srcSet={`${images[img1x]} 1x, ${images[img2x]} 2x`}
            alt={name}
          />
          <svg className={s.icon}>
            <use xlinkHref={`${sprite}#icon-linkedin`}></use>
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
