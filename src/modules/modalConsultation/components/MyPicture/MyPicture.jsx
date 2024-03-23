import { Picture } from 'shared/components';
import imgMobail from '../../img/photoModalmobail.jpg';
import imgMobail2x from '../../img/photoModalmobail2x.jpg';
import imgTablet from '../../img/photoModaltablet.jpg';
import imgTablet2x from '../../img/photoModaltablet2x.jpg';
import imgDesk from '../../img/photoModaldesk.jpg';
import imgDesk2x from '../../img/photoModaldesk2x.jpg';

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
