import { Picture } from 'shared/components';
import {
  mainImageDesc,
  mainImageDesc2x,
  mainImageMob,
  mainImageMob2x,
  mainImageTab,
  mainImageTab2x,
} from 'modules/hero/image';
import s from './MainPicture.module.scss';

const MainPicture = () => {
  return (
    <div className={s.thumb}>
      <Picture
        urlMobile={mainImageMob}
        urlMobile2x={mainImageMob2x}
        urlTablet={mainImageTab}
        urlTablet2x={mainImageTab2x}
        urlDesktop={mainImageDesc}
        urlDesktop2x={mainImageDesc2x}
        alt="psyshologist avatar"
        width={'270'}
      />
    </div>
  );
};
export default MainPicture;
