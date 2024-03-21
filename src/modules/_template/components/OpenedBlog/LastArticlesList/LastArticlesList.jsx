import { LastArticleCard } from '../LastArticlesCard/LastArticlesCard';

const LastArticlesList = ({ lastArticles }) => {
  return (
    <div>
      <>
        <h4>Останні статті</h4>
      </>

      {lastArticles.map((item, index) => {
        switch (item.block) {
          case 'article':
            return (
              <LastArticleCard
                key={index}
                image={item.image}
                date={item.data}
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
      <button type="button">Переглянути більше статтей</button>
    </div>
  );
};

export default LastArticlesList;

// "block": "article",
//     "image": "",
//     "date": "16.01.2024",
//     "author": "Ірина Прудько ",
//     "title": "Ефективні психологічні методи мотивування персоналу у сучасному бізнесі. ",
//     "content": "У су
