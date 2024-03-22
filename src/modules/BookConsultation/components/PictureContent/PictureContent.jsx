import s from './PictureContent.module.scss';
import Picture from '../Picture/Picture';
import {
  portretDesc,
  portretDesc2x,
  portretMob,
  portretMob2x,
  portretTab,
  portretTab2x,
} from 'modules/BookConsultation/images';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        mob={portretMob}
        mob2x={portretMob2x}
        tab={portretTab}
        tab2x={portretTab2x}
        desc={portretDesc}
        desc2x={portretDesc2x}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
