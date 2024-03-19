import Certificate from './Certificate';
import s from './CertificatesList.module.scss';
const certificatesData = [
  {
    title: '1st certificate',
    description: '1st decsr',
    imageUrl: 'path-to-image1.png',
    imageSet: 'path-to-image1.png 1x, path-to-image1@2x.png 2x',
  },
  {
    title: '2nd certificate',
    description: '2nd descr',
    imageUrl: 'path-to-image2.png',
    imageSet: 'path-to-image2.png 1x, path-to-image2@2x.png 2x',
  },
  {
    title: '3rd certificate',
    description: '3rd descr',
    imageUrl: 'path-to-image3.png',
    imageSet: 'path-to-image3.png 1x, path-to-image3@2x.png 2x',
  },
];

const CertificatesList = () => {
  return (
    <div className={s.certificatesList}>
      {certificatesData.map(({ title, description, imageUrl, imageSet }) => (
        <Certificate
          key={title}
          title={title}
          description={description}
          imageUrl={imageUrl}
          imageSet={imageSet}
        />
      ))}
    </div>
  );
};

export default CertificatesList;
