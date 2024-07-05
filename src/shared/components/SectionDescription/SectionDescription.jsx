import s from './SectionDescription.module.scss';

const SectionDescription = ({ descr }) => {
  const renderingDescr = descr.split('\n');

  return (
    <div className={s.descrWrapper}>
      {renderingDescr.map((text, i) => (
        <p key={i} className={s.descr}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default SectionDescription;
