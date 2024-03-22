import Button from 'shared/components/Button/Button';
import { LastArticleCard } from '../LastArticlesCard/LastArticlesCard';
import s from './LastArticlesList.module.scss';

const LastArticlesList = ({ lastArticles }) => {
  return (
    <div className={s.wraperLastArticles}>
      <div className={s.wrapTitle}>
        <h4 className={s.titleArticles}>Останні статті</h4>
      </div>
      <ul className={s.list}>
        {lastArticles.map((article) => {
          return (
            <li key={article.id} className={s.item}>
              <LastArticleCard article={article} />
            </li>
          );
        })}
      </ul>
      <Button to="/blog">Переглянути більше статтей</Button>
    </div>
  );
};

export default LastArticlesList;
