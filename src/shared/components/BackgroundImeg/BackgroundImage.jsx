import clsx from 'clsx';
import s from './BackgroundImage.module.scss';
import { sprite } from 'shared/icons';

const BackgroundImage = ({ classSvg, classLine, name, nameLine }) => {
  return (
    <div className={s.container}>
      <svg className={clsx(s.svg, classSvg)}>
        <use xlinkHref={`${sprite}#${name}`}></use>
      </svg>
      <svg className={clsx(s.svg, classLine)}>
        <use xlinkHref={`${sprite}#${nameLine}`}></use>
      </svg>
    </div>
  );
};
export default BackgroundImage;
