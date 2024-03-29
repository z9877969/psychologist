import { Picture } from 'shared/components';
import imgMobail from '../../img/photomobail.jpg';
import imgMobail2x from '../../img/photomobail2x.jpg';
import imgTablet from '../../img/phototablet.jpg';
import imgTablet2x from '../../img/phototablet2x.jpg';
import imgDesk from '../../img/photodesk.jpg';
import imgDesk2x from '../../img/photodesk2x.jpg';

const MyPicture = () => {
  return (
    <Picture
      urlMobile={imgMobail}
      urlMobile2x={imgMobail2x}
      urlTablet={imgTablet}
      urlTablet2x={imgTablet2x}
      urlDesktop={imgDesk}
      urlDesktop2x={imgDesk2x}
    />
  );
};

export default MyPicture;
