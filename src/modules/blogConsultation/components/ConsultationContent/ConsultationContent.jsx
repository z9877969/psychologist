import PictureContent from 'shared/components/PictureContent/PictureContent';
import s from './ConsultationContent.module.scss';
import Content from '../Content/Content';

const ConsultationContent = () => {
  return (
    <div className={s.consultationContent}>
      <PictureContent />
      <Content />
    </div>
  );
};

export default ConsultationContent;
