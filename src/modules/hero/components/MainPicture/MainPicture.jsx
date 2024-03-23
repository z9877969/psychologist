import Picture from 'modules/Consultation/components/Picture/Picture';
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
        mob={mainImageMob}
        mob2x={mainImageMob2x}
        tab={mainImageTab}
        tab2x={mainImageTab2x}
        desc={mainImageDesc}
        desc2x={mainImageDesc2x}
        alt="psyshologist avatar"
        width={270}
      />
    </div>
  );
};
export default MainPicture;
