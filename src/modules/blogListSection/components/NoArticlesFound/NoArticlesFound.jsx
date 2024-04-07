import s from './NoArticlesFound.module.scss';

const NoArticlesFound = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Не знайдено жодної статті за вашим запитом. Можливо, вас зацікавить
        інший контент з блогу
      </p>
    </div>
  );
};

export default NoArticlesFound;
