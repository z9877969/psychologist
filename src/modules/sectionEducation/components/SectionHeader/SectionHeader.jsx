import s from './SectionHeader.module.scss';

const SectionHeader = () => {
  return (
    <div className={s.headerContainer}>
      <h1 className={s.header}>Освіта і сертифікати</h1>
      <p className={s.description}>
        Активно продовжую професійне навчання, зокрема у напрямку
        психоконсультування.
      </p>
    </div>
  );
};

export default SectionHeader;
