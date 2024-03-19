import s from './Certificate.module.scss';

const Certificate = ({ title, description, imageUrl, imageSet }) => {
  return (
    <div className={s.certificate}>
      <img
        srcSet={imageSet}
        src={imageUrl}
        alt={`Certificate ${title}`}
        className={s.certificateImage}
        width="228"
        height="351"
      />
      <div className={s.certificateInfo}>
        <p className={s.certificateDescription}>{description}</p>
      </div>
    </div>
  );
};
export default Certificate;
