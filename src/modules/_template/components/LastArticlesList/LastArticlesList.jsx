const LastArticlesList = ({ lastArticles }) => {
  return (
    <div>
      {lastArticles.map((item, index) => {
        switch (item.block) {
          case 'image':
            return <Image key={index} content={item} />;
          case 'date':
            return <Date key={index} content={item} />;
          case 'author':
            return <Author key={index} content={item} />;
          case 'caption':
            return <Caption key={index} content={item} />;
          case 'paragraph':
            return <Paragraph key={index} content={item} />;
          default:
            // eslint-disable-next-line no-console
            console.error('Unknown block type:', item.block);
            return null;
        }
      })}
    </div>
  );
};

export default LastArticlesList;
