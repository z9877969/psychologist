import { Picture } from 'shared/components';
import {
  consultationDesc,
  consultationDesc2x,
  consultationMob,
  consultationMob2x,
  consultationTab,
  consultationTab2x,
} from 'modules/Consultation/images/consultation';
import s from './PictureContent.module.scss';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        className={s.picture}
        urlMobile={consultationMob}
        urlMobile2x={consultationMob2x}
        urlTablet={consultationTab}
        urlTablet2x={consultationTab2x}
        urlDesktop={consultationDesc}
        urlDesktop2x={consultationDesc2x}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
