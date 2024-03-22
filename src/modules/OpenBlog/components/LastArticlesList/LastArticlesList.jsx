import Button from 'shared/components/Button/Button';
import { LastArticleCard } from '../LastArticlesCard/LastArticlesCard';
import s from './LastArticlesList.module.scss';
import lastArticles from '../modules/OpenBlog/data/lastArticles.json';

const LastArticlesList = () => {
  const data = lastArticles.slice(0, 3);
  return (
    <div className={s.wraperLastArticles}>
      <div className={s.wrapTitle}>
        <h4 className={s.titleArticles}>Останні статті</h4>
      </div>
      <ul className={s.list}>
        {data.map((blog) => {
          return (
            <li key={blog.id} className={s.item}>
              <LastArticleCard article={blog} />
            </li>
          );
        })}
      </ul>
      <Button to="/blog">Переглянути більше статтей</Button>
    </div>
  );
};

export default LastArticlesList;
