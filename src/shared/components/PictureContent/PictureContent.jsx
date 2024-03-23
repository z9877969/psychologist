import {
  consultationDesc,
  consultationDesc2x,
  consultationMob,
  consultationMob2x,
  consultationTab,
  consultationTab2x,
} from 'modules/Consultation/images/consultation';
import s from './PictureContent.module.scss';
import Picture from '../../../modules/Consultation/components/Picture/Picture';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        mob={consultationMob}
        mob2x={consultationMob2x}
        tab={consultationTab}
        tab2x={consultationTab2x}
        desc={consultationDesc}
        desc2x={consultationDesc2x}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
