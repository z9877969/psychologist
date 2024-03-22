import { LastArticleCard } from '../LastArticlesCard/LastArticlesCard';
import s from './LastArticlesList.module.scss';

const LastArticlesList = ({ lastArticles }) => {
  return (
    <div className={s.wraperLastArticles}>
      <div className={s.wrapTitle}>
        <h4 className={s.titleArticles}>Останні статті</h4>
      </div>

      {lastArticles.map((item, index) => {
        switch (item.block) {
          case 'article':
            return (
              <LastArticleCard
                key={index}
                image={item.image}
                date={item.date}
                author={item.author}
                title={item.title}
                content={item.content}
              />
            );

          default:
            // eslint-disable-next-line no-console
            console.error('Unknown block type:', item.block);
            return null;
        }
      })}
      <button className={s.button} type="button">
        Переглянути більше статтей
      </button>
    </div>
  );
};

export default LastArticlesList;
