import Content from '../Content/Content';
import PictureContent from '../PictureContent/PictureContent';
import s from './ConsultationContent.module.scss';

const ConsultationContent = () => {
  return (
    <div className={s.consultationContent}>
      <Content />
      <PictureContent />
    </div>
  );
};

export default ConsultationContent;
