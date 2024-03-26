import s from './ConsultationInfo.module.scss';
import Content from '../Content/Content';
import { abilities } from 'modules/Consultation/data';
import { PictureContent } from 'shared/components';

const ConsultationInfo = () => {
  return (
    <div className={s.consultationInfo}>
      <PictureContent />
      <Content abilities={abilities} />
    </div>
  );
};

export default ConsultationInfo;
